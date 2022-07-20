from django.shortcuts import render
from django.db import IntegrityError
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods # tell liam
from .models import Account, ParkVO
from .encoders import AccountEncoder, ParkVOEncoder
import json



# Create your views here.
@require_http_methods(["GET", "POST"])
def accounts_list(request):
    if request.method == "GET":
        accounts = Account.objects.all()
        return JsonResponse(
            {"accounts": accounts},
            encoder=AccountEncoder,
        )
    else:
        request.method == "POST"
        try:
            content = json.loads(request.body)
            print(content)
            account = Account.objects.create_user(
                username=content["username"],
                password=content["password"],
                email=content["email"],
                first_name=content["first_name"],
                last_name=content["last_name"],
            )
            Account.objects.create(account=account)
            return JsonResponse(
                {"account": account},
                encoder=AccountEncoder,
            )
        except IntegrityError:
            response = JsonResponse(
                {"detail": "Please enter a different username and email"}
            )
            response.status_code = 409
            return response



@require_http_methods(["GET"])
def account_detail(request, id):
    if request.method == "GET":
        # content = json.loads(request.body)
        account = Account.objects.get(id=id)
        return JsonResponse(
            {
                "id": account.id,
                "username": account.username,
                "email": account.email,
            }
        )