from django.http import HttpResponse
from django.template import loader
from .models import Member

def members(request):
    mymembers = Member.objects.all().values()
    template = loader.get_template('all_members.html')
    context = {
        'mymembers': mymembers,
    }
    return HttpResponse(template.render(context, request))

def details(request,id):
    mymember = Member.objects.get(id=id)
    template = loader.get_template('details.html')
    context = {
        'mymember': mymember,
    }
    return HttpResponse(template.render(context, request))

def main(request):
    template = loader.get_template('main.html')
    return HttpResponse(template.render())

def testing(request):
    mymembers = Member.objects.all().values()
    template = loader.get_template('template.html')
    context = {
        'mymembers': mymembers
    }
    return HttpResponse(template.render(context,request))

# Examples

# All entries with Member.firstname='Emil'
# def testing(request):
    mymembers = Member.objects.all().filter(firstname='Emil').values()

# All firstname entries in the table 
# def testing(request):
    mymembers = Member.objects.all().values_list('firstname')


# All entries with EITHER firstname='Emil' OR firstname='Tobias'
# def testing(request):
    mymembers = Member.objects.all().filter(firstname='Emil').values() | Member.objects.all().filter(firstname='Tobias').values()
    
# All entries with firstname starting with 'L'
# def testing(request):
    mymembers = Member.objects.all().filter(firstname__startswith='L').values() # 2 underscores
    
# Entries in firstname order
# def testing(request):
    mymembers = Member.objects.all().order_by('firstname').values() # or ('-firstname') for reverse
    
# Entries in firstname order then descending id for tiebreaker
# def testing(request):
    mymembers = Member.objects.all().order_by('firstname', '-id').values()