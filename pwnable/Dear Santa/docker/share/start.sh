#!/bin/bash
while :
do
	./server.sh &
	echo "Server start!"
	sleep 60
	kill -9 $(pidof native_server)
done
