FROM ubuntu:18.04

RUN sed -i 's/archive.ubuntu.com/mirror.kakao.com/g' /etc/apt/sources.list
RUN groupadd -g 1000 prob
RUN useradd -g 1000 -u 1000 -m prob
RUN apt update && apt install -y libsdl1.2debian libsdl-image1.2 zlib1g libogg0 libvorbis0a libopenal1 libcurl4 libsdl1.2-dev && apt install -y gcc-multilib clang git make

WORKDIR /home/prob/
COPY ./share/ /home/prob/
RUN git clone https://github.com/assaultcube/AC
WORKDIR ./AC
RUN git reset --hard 05003f9238a22a646773916b0b03986ada7b7eb8 
RUN ["/bin/bash", "-c", "patch -p1 < ../patch.patch"]
WORKDIR ./source/src
RUN make server_install

WORKDIR /home/prob

RUN mv ./start.sh ./AC/.

WORKDIR ./AC
RUN chmod +x ./start.sh

CMD ./start.sh