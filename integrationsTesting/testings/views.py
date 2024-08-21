from django.shortcuts import render
from urllib import request
from rest_framework import viewsets
from .serializers import BookSerializer
from .models import Book

# Create your views here.
def home(request):
    return render(request, 'index.html')

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer