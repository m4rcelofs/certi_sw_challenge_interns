#!/usr/bin/python3

import os
import subprocess
import sys

PROJECT_HOME = os.path.dirname(os.path.abspath(__file__))
IMG_TAG = "certi_sw_challenge_env:1.0.0"
ENV_PATH = os.path.join(PROJECT_HOME, "test-env")

def build():
    print(">>>>>>>>>> Building <<<<<<<<<<")
    command = "docker build -t " + IMG_TAG + " -f " + os.path.join(ENV_PATH, "Dockerfile.env") + " " + ENV_PATH
    print(command)
    return subprocess.call(command, shell=True)


def run(arguments):
    print(">>>>>>>>>> Creating new test environment <<<<<<<<<<")
    port = arguments[0] if len(arguments) >= 1 else "3000"
    image = arguments[1] if len(arguments) >= 2 else IMG_TAG
    command = "docker run -it --rm --name sw_challenge_env -p " + port + ":" + port + " " + image + " /bin/bash"
    print(command)
    return subprocess.call(command, shell=True)


def main():
    arguments = sys.argv[1:]

    try:
        build()
        run(arguments)
    except KeyboardInterrupt:
        pass

    return


if __name__ == '__main__':
    main()