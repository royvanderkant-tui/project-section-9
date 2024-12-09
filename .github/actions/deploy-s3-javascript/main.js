const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    core.notice('Hallo from my custom javascript action!');
}

run ();