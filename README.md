# jenkins-dashboard

[![Build Status](https://travis-ci.org/clarkie/jenkins-dashboard.svg?branch=master)](https://travis-ci.org/clarkie/jenkins-dashboard)

![Example Dashboard](https://raw.githubusercontent.com/clarkie/jenkins-dashboard/master/images/example-dashboard.gif)

### Usage

1. clone this repository
2. run npm start

### Environment Variables

Use environment variables to run the process e.g.

```
JENKINS_URL=[url-to-your-server] JOBS_FILTER=[filter] npm start
```

#### JENKINS_URL
(required)
Pretty obvious but just the root url to your jenkins server (e.g. jenkins.workplace.com)

#### JOBS_FILTER
(optional)
Regex to pick the jobs you want to display

### Todo

1. Make it handle any number of jobs and resize the grid accordingly
2. better error handling
3. tests
4. make it a command line tool so you could run `jenkins-dash -f=[filter] [url]`
5. add the last built time to the jobs
6. get it to handle build pipelines
7. consider using json to pick jobs to display
