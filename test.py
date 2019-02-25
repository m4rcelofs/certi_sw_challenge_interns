#!/usr/bin/python3

import os
import subprocess
import sys

PROJECT_HOME = os.path.dirname(os.path.abspath(__file__))
IMG_TAG = "certi_sw_challenge_tests:1.0.0"


def build():
    print(">>>>>>>>>> Building <<<<<<<<<<")
    command = "docker build -t " + IMG_TAG + " -f " + os.path.join(PROJECT_HOME, "Dockerfile.tests") + " ."
    print(command)
    return subprocess.call(command, shell=True)


def run(arguments):
    print(">>>>>>>>>> Running tests <<<<<<<<<<")
    host = arguments[0] if len(arguments) >= 1 else "http://localhost:3000"
    command = "docker run -it --rm --name sw_challenge_tests -e \"HOST=" + host + "\" " + IMG_TAG + " yarn test"
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