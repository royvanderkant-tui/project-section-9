import core from '@actions/core';
import github from '@actions/github';
import exec from '@actions/exec';

function run() {
    core.notice('Hallo from my custom javascript action!');
}

run ();