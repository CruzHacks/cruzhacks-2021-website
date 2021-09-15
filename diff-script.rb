#!/usr/bin/env ruby

require "shellwords"

COMMIT_FORMAT = "* %C(yellow bold)%h%Creset %s %C(blue)[%an]%Creset".freeze

def run
  git! "fetch"
  main_log = git! "log origin/production"
  cherries = git! "cherry -v origin/production origin/main"

  cherries.each_line(chomp: true) do |commit|
    pr_number = commit[/\(#\d+\)/]
    next unless commit.start_with?("+")
    next if pr_number && main_log.include?(pr_number)

    formatted = git! "show --color=always --pretty=format:#{COMMIT_FORMAT.shellescape} -s #{commit[/\h+/]}",
                     echo: false
    puts formatted
  end
end

def git!(command, echo: true)
  puts ">>>> git #{command}" if echo

  result = `git #{command}`
  return result if Process.last_status.success?

  warn "Failed: #{command}"
  exit 1
end

run
