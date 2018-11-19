# Founders and Coders Website

💛💙❤️💚 Welcome to the home of the Founders and Coders website and brand! 💛💙❤️💚

### About 

This rebrand and website redesign was directed by @rebeccaradding and lovingly created by [InFact Coop](www.infactcoop.com), an agency composed of Founders and Coders graduates.

We hope you love the fun, contemporary style and enjoy using the new site!

### Contents
* [Maintenance notes](#Maintenance-tasks-for-the-FAC-team-and-Course-Facilitator)
* [Contributing to the site](#Contributing)
* [Suggestions for contributions](#Suggestions-for-additional-work)
* [Running Locally](#Instructions-for-running-locally)
	

## Maintenance tasks for the FAC team and Course Facilitator

To make routine maintenance simple, we've put the information that changes regularly all in one place - `maintenance.js` in the root of the project.

By editing this file you can:
* Toggle applications open/closed
* Update the table of cohort dates
* Update any of the various form URLs. These are:
	* Application form
	* Expression of Interest form
	* Partner Contact form (Hire page)
	* Tech for Better application form

FAC staff and the Course Facilitator are encouraged to create PRs and merge changes to this file without following the full contributing process.

**Other tasks:**

To add an article to Stories page, you have to edit `src/storyData.js` and add an object to the array of articles, using the following as a template: 

```
{
  storyType: "",      // SELECT ONE OF: "by_us", "about_us", "in_the_press", "podcast"
  img: {},            // optional
  heading: "",
  subtitle: "",
  author: "",         // optional
  publication: "",    // optional - only for "in_the_press" stories
  date: "",           // format `MMM DD YYYY` e.g "Sep 08 2018"
  url: ""
}
```

## Contributing

We **welcome** additions and enhancements from the Founders and Coders community!

This guidance is for those wishing to add bug fixes, features or enhancements to the site. For routine maintenance (e.g. opening applications) see the [maintenance section](#Maintenance-tasks-for-the-FAC-team-and-Course-Facilitator).

### Before starting work

1. Search this repo's [issues](https://github.com/foundersandcoders/fac-new-website/issues) to see if an issue exists for the problem you are solving.
2. If the issue does not exist, create it. Include a descriptive body.
3. If your new issue relates to any others, reference those issues in the body. This enables others to follow the history of the topic.
4. Indicate on the issue that you would like to take it on. Assign a reviewer if you need a response.
5. Assign [the appropriate label](#labels).
6. Once you are sure of what you need to do and that it is needed, assign yourself to the issue.
7. Clone, and create a new branch for your workone, and create a new branch for your work

#### Labels
`bug` - something in this repo is broken (e.g. a link)
`discuss` - you'd like the community's input before you start any work
`question` - you're not actually sure whether this is an issue or not and would like confirmation
`help wanted` - you would like some help in completing work on this issue

### Starting work

#### Commits
The commit history of each file should tell a story
+ [Describe your changes well](https://gist.github.com/mikepea/863f63d6e37281e329f8#describe-your-changes-well-in-each-commit)
+ [Commits should be granular](https://gist.github.com/mikepea/863f63d6e37281e329f8#keep-it-small)
+ **It is important that you reference an issue in each commit** - use multiline messages

#### Pull Requests
Once you have finished your work, push up your branch and make a pull request. Remember, a pull request should be as small as possible. This makes the review process quick and easy.

Make sure your PR has the following:
1. [A descriptive title](https://gist.github.com/mikepea/863f63d6e37281e329f8#ensure-there-is-a-solid-title-and-summary) - distinct from others and therefore searchable
2. [A body with details of everything in the pull.](https://gist.github.com/mikepea/863f63d6e37281e329f8#ensure-there-is-a-solid-title-and-summary)
3. Reference to any/all related issues in description.
5. Reviewers
   + add anyone who you think should be aware of you contents of your PR e.g. anyone else who has collaborated with you on this issue / anyone responsible for maintaining the site

## Suggestions for additional work

For routine maintenance see our section on [Maintenance](#Maintenance-tasks-for-the-FAC-team-and-Course-Facilitator) and please read our section on [Contributing](#Contributing) before starting to work on the site.

**Some enhancements we'd LOVE to see:**
* We'd like to regularly update the Stories section of our site with recent news articles. However, adding articles currently requires hard-coding a item into the articles array and making a PR to this repo! It would be great to have a protected 'admin area' that holds a simple form which submits new articles to the site.

## Instructions for running locally

1. Clone this repo and navigate to it:
```
git clone https://github.com/foundersandcoders/fac-new-website.git

cd fac-new-website
```
2. Install the dependencies:
```
npm install
```
3. Run the development server:
```
npm run develop
```

# Thank you for reading!
P.S. please star this repo 🌟