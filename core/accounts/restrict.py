from django.contrib.auth.models import User
from django.shortcuts import redirect, render


def check_access(userid, curr_user):
    user = User.objects.get(username = userid)
    if curr_user == user:
        return True
    else:
        return False