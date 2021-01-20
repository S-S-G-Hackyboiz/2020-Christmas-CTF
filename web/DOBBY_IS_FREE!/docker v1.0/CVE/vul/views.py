from django.shortcuts import render
from .models import Blog
from django.contrib.postgres.aggregates import StringAgg


def main(request,):
    return render(request, "vul/main.html")

def list(request,):
    results = Blog.objects.all()

    context = {"posts":results}
    return render(request, "vul/list.html", context)

def index(request, blog_id):
    content = request.GET.get('content')
    if content == None:
        content = ''

    results = Blog.objects.all().filter(pk=blog_id, content__contains=content).values('title').annotate(
        custom_field=StringAgg('content', delimiter=content))

    convert = []
    for row in results:
        convert.append(row)
    context = {'posts': convert}

    return render(request, 'vul/index.html', context)
