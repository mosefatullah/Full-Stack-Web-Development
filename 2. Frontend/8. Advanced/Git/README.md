[][][] Basic Commands :-

=Checking version:- git --version
=Configuration :- git config --global user.name "name"
                            git config --global user.email "name@gmail.com"
=Initializing git :- git init

[][][] Terms of git :-
- Repository : a remote location or storage.
- Branch : a version of the reposiitory.
- Checkout :  switching between branches.
- Fetch: retrieves changes from the remote repository.
- Clone : fetches and makes a local copy of the repository.
- Pull: fetches and updates (merges) local repository from the remote source.
- Push : uploads local repository content to the repository. 
- Merge : combines changes from different branches into one branch.
- Conflict: changes conflict when merging into a branch.
- Commit : records changes to the local repository only.
- Head : the last commit of the branch.
- Origin : source of & shorthand default name for the remote repository.

[][][] Common process :-
*
remote repository 
--(clone/pull)--> working directory
*
remote repository 
--(fetch)--> local repository
--(checkout)--> working directory
*
working directory 
---(add)--> staging area 
---(commit)--> local repository
---(push)--> remote repository
*


[][][] All Commands :-

=Help for commands :- git help --all, git {command} -help
=Viewing files lists :- ls
=Checking status :- git status, git status --short

=Staging :- git add file.js, git add --all/-A
=Committing :- git commit -m "First commit!"
=Commit without staging :- git commit -a -m "Direct commit!"
=Viewing history :- git log, git log origin/{branch_name}

=Creating new branch :- git branch {name}
=Viewing local branches :- git branch
=Viewing remote branches :- git branch -r
=Viewing local & remote branches :- git branch -a
=Moving to branch :- git checkout {name}
=Create & move to branch :- git checkout -b {name}
=Merging from a branch :- git merge {name}
=Removing branch from local :- git branch -d {name}

=Cloning :- git clone https://github.com/{name}/{name}.git
=Adding origin :- git remote add origin https://github.com/{name}/{name}.git
=Renaming origin to :- git remote rename origin to {name}
=Pushing to the origin :- git push origin
=Pushing + settings :- git push --set-upstream origin {branch_name} -> git push
=Fetching from origin :- git fetch origin
=Difference between the local & remote branch :- git diff origin/{branch}
=Merging from origin :- git merge origin/{branch_name}
=Pulling (fetch+merge) :- git pull origin, git pull

[][][] Repairing Corruption
= Run `git fsck` to identify the corrupted file, delete it, then re-commit and sync the changes.
= If you get an error including the word `lock`, then delete the index.lock file under .git folder.