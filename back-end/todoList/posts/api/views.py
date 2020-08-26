# from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView
from posts.models import Post
from .serializers import PostSerializer
from rest_framework import viewsets

class PostViewSet(viewsets.ModelViewSet):

    serializer_class = PostSerializer
    queryset = Post.objects.all()

# class PostListView(ListAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer


# class PostDetailView(RetrieveAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

# class PostCreateView(CreateAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

# class PostUpdateView(UpdateAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

# class PostDeleteView(DestroyAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer