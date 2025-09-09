from rest_framework import serializers
from .models import Role, Permission, RolePermission, MappedRole

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['role_id', 'name']


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = ['permission_id', 'permission_name']


class RolePermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = RolePermission
        fields = ['id', 'role', 'permission']


class MappedRoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = MappedRole
        fields = ['id', 'role', 'user']
