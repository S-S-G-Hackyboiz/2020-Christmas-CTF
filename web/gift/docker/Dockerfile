FROM tomcat:8.5.54-jdk8-openjdk

ENV DEBIAN_FRONTEND noninteractive

RUN apt update && apt install -y lsb-release vim && \
wget https://dev.mysql.com/get/mysql-apt-config_0.8.16-1_all.deb && \
dpkg -i mysql-apt-config_0.8.16-1_all.deb && rm -f mysql-apt-config_0.8.16-1_all.deb && \
apt update && apt -y install mysql-server && apt clean && \
rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /bin/rm

ADD ./run.sh /root/
ADD ./create.sql /root/
RUN chmod +x /root/run.sh

# web settings
ADD ./src.tar.gz /usr/local/tomcat/webapps/
ADD ./lib.tar.gz /usr/local/tomcat/
ADD ./conf.tar.gz /usr/local/tomcat/

#flag
ADD ./special_gift /
RUN chmod 330 /special_gift && mkdir /usr/local/tomcat/media && mkdir /usr/local/tomcat/media/gift

EXPOSE 8080

ENTRYPOINT ["/root/run.sh"]
