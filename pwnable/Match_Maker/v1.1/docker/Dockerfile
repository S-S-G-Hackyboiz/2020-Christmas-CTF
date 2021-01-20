FROM ubuntu:20.04

RUN apt-get update && apt-get install -y xinetd netcat

RUN useradd -d /home/matchmaker matchmaker -s /bin/bash
RUN mkdir /home/matchmaker

RUN chown -R root:matchmaker /home/matchmaker
RUN chmod 750 /home/matchmaker

ADD match /home/matchmaker/match
ADD flag /flag

RUN chmod +x /home/matchmaker/match

RUN chown root:matchmaker /flag
RUN chmod 440 /flag

ADD xinetd /etc/xinetd.d/xinetd
ADD ./run.sh /run.sh
RUN chown root:matchmaker /run.sh
RUN chmod +x /run.sh

EXPOSE 3000

ENTRYPOINT ["/run.sh"]
