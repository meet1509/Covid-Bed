from django.shortcuts import render
from .models import Hospital
from django.db.models import F


# Create your views here.
def index2(request):
    #data=''
    if (request.method == 'POST'):
        if 'search' in request.POST:
            location = request.POST.get('location')
            data = Hospital.objects.filter(city=location).filter(vacant_beds__gte=0)
            return render(request, 'beds.html', {'hospitals': data})
        else:
            hosname = request.POST.get('dropdown')
            #print(hosname)
            #ins = Hospital.objects.get(hname = hosname)
            #ins.vacant_beds= F("vacant_beds")-1
            #ins.save()
            
            try:
                h = Hospital.objects.get(hname=hosname)
                h.vacant_beds -= 1
                h.save()
            except:
                print(hosname)
            
            return render(request, 'beds.html')
    else:
        return render(request, 'beds.html')

def index(request):
        return render(request, 'index.html')