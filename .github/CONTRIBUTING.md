## Varlet Contributing Guide

Hi! We are really excited that you are interested in contributing to Varlet. Before submitting your contribution, please make sure to take a moment and read through the following guide:

### Ready to start

We welcome everyone to join the construction of the project.
As a pre requirement, you need have a preliminary understanding of `vuejs/core`, if you don't know `vuejs/core`.
this is a good [learn documentation for vuejs/core](https://vuejs.org/).
And you can refer to [GitHub's help documentation](https://help.github.com/en/github/using-git) if you don't know the basic operation of Git.

The Varlet repo is a monorepo using pnpm workspaces. The package manager used to install and link dependencies must be [pnpm](https://pnpm.io/).

To develop and test the core `varlet` package:

1. [Fork this repository](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) to your own account and then clone it.
2. Create a new branch for your changes: `git checkout -b {BRANCH_NAME}`.
3. Run `pnpm bootstrap` in Varlet's root folder.
4. View your change on your local document site , you need run `pnpm dev`.

At any time, you can start the following steps to submit your amazing works:

1. Run `pnpm lint` check the code style.
2. Run `pnpm test` to update & run your tests.
3. Commit message should be formatted by the [rule](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y).
4. Push code to your own repo and [create PullRequest](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) at GitHub. (Rebase before creating a PR to keep commit history clear).

### Common steps

**Create component**

Run `pnpm run create`.

**Create test case**

1. If you are creating a new component, the test case is required.
2. If you only modify components, please note update test snapshot: `pnpm test:watch and press u`.
3. If you want to execute only the test cases of a specific component: `pnpm test:watch -c <componentName>`.
4. Please check coverage locally before submit.

### Q & A

> How can I update remote origin ?

- Refer to [here](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes).

> How to choose the target branch of PR ?

- Make sure PRs are created to `dev` branch instead of `main` branch.

> How to solve failure of installing sharp after running `pnpm bootstrap` ?

- You can choose to change mirror site which contains binaries for both sharp and libvips.

1. Set following configuration:

``` shell
pnpm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
pnpm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
```

2. Run `pnpm bootstrap` again.

### Get stuck

- Create new issue to tell us: [create issue](https://github.com/varletjs/varlet/issues).
