FROM ubuntu:20.04

RUN apt-get update && apt-get install -y xinetd netcat

RUN useradd oil
RUN mkdir /home/oil-system
RUN mkdir /workingDir
RUN mkdir /cache

RUN chown -R root:oil /home/oil-system
RUN chmod 750 /home/oil-system

RUN chown -R root:oil /cache
RUN chmod 777 /cache
RUN chown -R root:oil /workingDir
RUN chmod 777 /workingDir

ADD oil /home/oil-system/oil
ADD flag /flag

RUN chown root:root /home/oil-system/oil
RUN chmod +x /home/oil-system/oil

RUN chown root:oil /flag
RUN chmod 444 /flag

ADD xinetd /etc/xinetd.d/xinetd
ADD ./run.sh /run.sh
RUN chown root:oil /run.sh
RUN chmod +x /run.sh

EXPOSE 3000

ENTRYPOINT ["/run.sh"]
