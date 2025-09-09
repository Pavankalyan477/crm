from django.db import models
from django.conf import settings

class Role(models.Model):
    role_id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Permission(models.Model):
    permission_id = models.AutoField(primary_key=True)
    permission_name = models.CharField(max_length=150, unique=True)

    def __str__(self):
        return self.permission_name


class RolePermission(models.Model):
    role = models.ForeignKey(Role, on_delete=models.CASCADE, related_name="permissions")
    permission = models.ForeignKey(Permission, on_delete=models.CASCADE, related_name="roles")

    class Meta:
        unique_together = ('role', 'permission')

    def __str__(self):
        return f"{self.role.name} → {self.permission.permission_name}"


class MappedRole(models.Model):
    role = models.ForeignKey(Role, on_delete=models.CASCADE, related_name="users")
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="roles")

    class Meta:
        unique_together = ('role', 'user')

    def __str__(self):
        return f"{self.user} → {self.role.name}"
