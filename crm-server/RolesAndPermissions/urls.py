from django.urls import path
from . import views

urlpatterns = [
    path('roles/', views.RoleListCreateView.as_view(), name='role-list-create'),
    path('permissions/', views.PermissionListCreateView.as_view(), name='permission-list-create'),
    path('role-permissions/', views.RolePermissionCreateView.as_view(), name='role-permission-create'),
    path('mapped-roles/', views.MappedRoleCreateView.as_view(), name='mapped-role-create'),
]
