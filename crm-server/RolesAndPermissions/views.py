from rest_framework import generics, filters
from .models import Role, Permission, RolePermission, MappedRole
from .serializers import RoleSerializer, PermissionSerializer, RolePermissionSerializer, MappedRoleSerializer

# Create & List Roles
class RoleListCreateView(generics.ListCreateAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name']  # search by role name
    ordering_fields = ['role_id', 'name']


# Create & List Permissions
class PermissionListCreateView(generics.ListCreateAPIView):
    queryset = Permission.objects.all()
    serializer_class = PermissionSerializer


# Assign Permissions to Roles
class RolePermissionCreateView(generics.ListCreateAPIView):
    queryset = RolePermission.objects.all()
    serializer_class = RolePermissionSerializer


# Assign Roles to Users
class MappedRoleCreateView(generics.ListCreateAPIView):
    queryset = MappedRole.objects.all()
    serializer_class = MappedRoleSerializer
