# For developers
## How to run the project
1. Clone the repository
`git clone ~`
2. Install the dependencies
`npm install`
3. Run the project
`npm run start`

# For maintainers
## How to deploy
1. `npm run build`
2. copy build directory to www/chiashi/
3. git stuff
4. create pull request, get review and merge if you can
# How to update contents
Most contents are written in /src/content/ directory.\
For example, if you want to update the contents of /paper page, you can edit /src/content/papers.js.\
In papers.js, you can find 'main' variable. The paper with true value will be shown in the top page, else will be shown only in the /paper page.\
Please sync the Japanese content and English content if you make changes.