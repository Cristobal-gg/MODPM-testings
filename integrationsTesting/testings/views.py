from django.shortcuts import render
from urllib import request
from rest_framework import viewsets
from .serializers import BookSerializer
from .models import Book
from django.http import JsonResponse

# Create your views here.
def home(request):
    return render(request, 'index.html')

#Clase que proporciona operaciones CRUD para modelo Book
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all() #conjunto inicial de datos
    serializer_class = BookSerializer #clase serializador para manejar objetos Book

def cualquiercuestion(request):
    data = Book.objects.all()
    serializer_cualquier = BookSerializer(data, many=True)
    return JsonResponse(serializer_cualquier.data, safe=False)