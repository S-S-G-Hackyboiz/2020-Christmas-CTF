#FROM ubuntu:18.04
FROM python:3.7.5-slim-buster
USER root
WORKDIR /root

SHELL [ "/bin/bash", "-c" ]

ARG PYTHON_VERSION_TAG=3.7.5
ARG LINK_PYTHON_TO_PYTHON3=1

RUN apt-get update && \
    apt-get -qq -y install gnupg unzip gcc && \ 
    apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4 && \
    echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.0.list && \
    apt-get update && \
    apt-get -qq -y install mongodb-org && \
    mkdir /data && \
    mkdir /data/db
WORKDIR /data
WORKDIR /root
#RUN export SED_RANGE="$(($(sed -n '\|enable bash completion in interactive shells|=' /etc/bash.bashrc)+1)),$(($(sed -n '\|enable bash completion in interactive shells|=' /etc/bash.bashrc)+7))" && \
#    sed -i -e "${SED_RANGE}"' s/^#//' /etc/bash.bashrc && \
#    unset SED_RANGE

COPY main.zip main.zip
RUN unzip main.zip
WORKDIR main
COPY requirements.txt requirements.txt
RUN ["python3.7","-m","pip","install", "-r","requirements.txt"]
EXPOSE 80
COPY start.sh start.sh
CMD sh start.sh
