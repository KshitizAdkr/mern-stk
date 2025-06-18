Day-1

## Mern syllabus
- Routing
- Auth
- Web Security
-  ## Deployement
-  ## Git and Github

## Git Online
- github
- gitlab
- gitbucket

### Tree Structure
- Branch(default)
    - 'main/master'
    ssh-secure cell access
    https

At terminal     //Git bash=Terminal

ssh= private(local)   git = public

    ssh-keygen
    enter all after that
    - go to given location andd open the .pub file with another app(vs code)
    - open and copy the key
    go to github account and setting>SSH and GPG keys>New SSH key>ADD key
        one folder, one repository
        For Configuration(New ones,Old one won't show up since it's already saved):
        git config --global user.email""
        git config --global user.name""

        for link:
        git remote add origin git@github.com:KshitizAdkr/Trial-Learn-Repo.git(or the repo link u get in github) 
        git add . (For Tracking)
        git commit -m "Initial Setup" ("You can write any name inside  "" for understanding)
        //Code is clean to push or pull

        git status(for status checking)

        if not push after commit,they will stay getting compiled and while we push,all the compiled files gets pushed.

        To change bramch from master to main or vice versa:
        git branch -m master main

        read : https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow (for operations of how it works,what the functions does)


Day-2 :
 ### Git Commands:
 - ##Setup Commands
    a. Git Initialiaztion
        - `git init`
    b.Repo Linking
        - `git remote add <name><remoteUrl>`
    c. Global config for user
        - `git config --global user.name<Your name>`
        - `git config --global user.email<Your email>`
    d. Default branch name
        - `git config --global init.deafultBranch<branchName>`
    e. Default branch rename
        - `git branch -m<currentBranchName> <newBranchName>`

    ## Informative commands
    a.status check
    b.branch name
    c. remote connected
    d.git logs

    ## Git operational commands
    a. Tracking 
    - `git add .`
    b. Commit 
    - `git commit -m "<commit message>"`
    c. Push 
    - `git push <name> <currentBranchName>[:<remoteBranchName>]`




Ruleset in github settings
Change seperator

git merge "branch name"
this wil merge the branch
for that:
- git branch
- git checkout
- git merge sandesh(i.e. branch name)

while error in merging:
shift;
q
if not work,give ! after q.
