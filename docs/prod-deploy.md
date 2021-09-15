# Production Deploys 

Our CI/CD pipeline is neatly set up to do automatically deploy everything that goes through into `main` to our [staging environment](https://staging.cruzhacks.com) where we can see & test the changes internally before rolling out to production, which is user-facing. 

We've set up a pretty neat way to roll those changes out into our `production` branch so we have more control over the changes being pushed into prod & keep our commit history as clean as we can to streamline any bugs that may occur and where they were introduced. 

In order to push to production, follow these steps: 

1. On your local machine, checkout the `production` branch
2. Make sure you have the latest `production` branch locally by running `git pull`  
3. On this same `production` branch, we want to branch off to start the deploy process by running `git branch -b deploy/todays-date-year` with the branch name following the pattern of `deploy/todays-date-year` ie `deploy/sep-15-21` (we should add year to avoid any possible clashes with any ghost branches from last year)
4. From here, in a seperate terminal window, we'd like to run [`diff-script`](../diff-script.rb) to see which commits are ready to be deployed. This script will output the different commits between `production` and `main` branch so you can see what commits have not yet made it into production 
5. You now want to run `git cherry-pick SHA` on all the commits in order produced from the script into your `deploy` branch 
6. Once all changes have been cherry-picked, push your branch upstream & create a pull request requesting to merge your newly created `deploy` branch into `production` with the [deploy format in the PR description](../.github/deploy_request_template.md)
7. This PR's title should also be in the following format `[Deploy] Today's Date` ie `[Deploy] Sep 15 21` 
8. Once CI passes & PR has been approved, this PR should be merged using `Rebase and Merge`! This step is super important so we don't lose the script's functionality & cleanliness in differentiating between our two branches. Only deploy PRs should use `Rebase and Merge`!! All other PRs should squash and merge. 