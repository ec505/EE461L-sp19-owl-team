from bs4 import BeautifulSoup
import requests
import pandas as pd

url = "http://www.txsmartscape.com/plant-search/get-plant-data.php"
#http://www.txsmartscape.com/plant-search/plant-details.php?id=968
#http://www.txsmartscape.com/plant-search/get-plant-data.php
url_response =requests.get(url)
soup = BeautifulSoup(url_response.content,"html.parser")
"""soup2 = BeautifulSoup('<div class="product-details text-center"><a href="www.google.com"><h5 class = "product-title">AztecGrass</h5></a><div class="price">Similar to Liriope</div></div>',"html.parser")
tagtest=soup2.div
print(tagtest['class'])
list = soup2("div",{"class": {'product-details','text-center'}})
print(list);
print(list[0].a['href'])"""
listdata=[]
for data in soup("div",{"class": {"product-details","text-center"}}):
        urlinner="http://www.txsmartscape.com/plant-search/"+data.a['href']
        url_responseinner=requests.get(urlinner)
        soupinner = BeautifulSoup(url_responseinner.content,"html.parser")
        save=soupinner.findAll("ul",{"class": {"list theme-colored"}})
        templist=[]
        for i in save[0].contents:
            if i != "\n":
                #name = i.strong.string
                templist.append(i.get_text())
        listdata.append(templist)

dictionary = {
              "Also Known As": [],
              "Botanical Name": [],
              "Plant Type": [],
              "Light Requirement": [],
              "Water Demand": [],
              "Landscape Use": [],
              "Ornamental Value": [],
              "Native/Adapted": [],
              "Wildlife Value": [],
              "Season": [],
              "Deciduous/Evergreen": [],
              "Plant Form": [],
              "Plant Spread": [],
              "Plant Height": []
            }

for lis in listdata:
    boo=False
    for entry in lis:
        ls = entry.split(':')
        key = ls[0]
        value = ls[1]
        if(key == "Also Known As"):
            boo = True
        try:
            dictionary[key].append(value)
        except KeyError:
            print(key)
            print(value)
            print('Didnt work')
            print(dictionary)
            print(lis)
            print()
    if(not boo):
        dictionary["Also Known As"].append("NA")

df = pd.DataFrame(dictionary)
df.to_csv('./plant_csv.csv')

print(listdata)

