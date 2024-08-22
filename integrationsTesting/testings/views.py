from django.shortcuts import render
from urllib import request
from rest_framework import viewsets
from .serializers import BookSerializer
from .models import Book

# Create your views here.
def home(request):
    return render(request, 'index.html')

#Clase que proporciona operaciones CRUD para modelo Book
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all() #conjunto inicial de datos
    serializer_class = BookSerializer #clase serializador para manejar objetos Book