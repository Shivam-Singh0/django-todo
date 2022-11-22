
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer
# Create your views here.


@api_view(['POST'])
def addTask(request):
    data = request.data

    todo = Todo.objects.create(
        title=data['title'],
        description=data['description'],


    )
    todo.save()
    return Response('Task Added')


@api_view(['GET'])
def getTasks(request):
    filter = request.query_params.get('filter')
    print(filter)

    tasks = Todo.objects.all()
    if filter == 'completed':
        tasks = Todo.objects.filter(completed=True)
    elif filter == 'pending':
        tasks = Todo.objects.filter(completed=False)
    serializer = TodoSerializer(tasks, many=True)

    return Response(serializer.data)


@api_view(['PUT'])
def markCompleted(request, pk):
    task = Todo.objects.get(id=pk)
    task.completed = True
    task.save()
    return Response('Completed')


@api_view(['DELETE'])
def delTask(request, pk):
    task = Todo.objects.get(id=pk)
    task.delete()
    return Response('Deleted')
