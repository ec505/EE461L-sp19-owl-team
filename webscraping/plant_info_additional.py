import pandas as pd
from bs4 import BeautifulSoup
import requests
from selenium import webdriver
import time
import pickle
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from webscraping.plant import Plant
plantlist=[]
with open('plantlist.txt','rb') as fp:
    plantlist=pickle.load(fp)
"""for plant in plantlist:
    if len(plant.zones) == 1:
        first = plant.zones[0].split(" ")
        if len(first)!= 1:
            newlist.append(first[1])
            plant.zones = newlist
    if len(plant.zones) >= 2:
        newlist = []
        first = plant.zones[0].split(" ")
        second = plant.zones[1].split(" ")
        if len(plant.zones) == 3:
            newlist.append(plant.zones[1])
            newlist.append(plant.zones[2])
            plant.zones=newlist
        elif len(first)!=1 and len(second)!=1:
            newlist.append(first[1])
            newlist.append(second[1])
            plant.zones=newlist"""
"""for plant in plantlist:
    if "Abelia" in plant.sciname:
        if len(plant.zones)<2:
            plant.zones.append('6')
            plant.zones.append('9')"""
"""for plant in plantlist:
    if plant.nickname.replace(" ","") == "NA":
        plant.nickname="N/A"
    if plant.planttype.replace(" ","")=="Perennial":
        plant.lifecycle="PERENNIAL"
        plant.planttype = "N/A"
    if plant.lightreq == "UNKNOWN":
        plant.lightreq="N/A"
    if plant.ornamentalvalue.replace(" ","")=="":
        plant.ornamentalvalue="N/A"
    if plant.wildlifevalue.replace(" ","")=="":
        plant.wildlifevalue="N/A"
    if plant.season.replace(" ", "") == "":
        plant.season = "N/A"
    if plant.landscapeuse.replace(" ","")=="":
        plant.landscapeuse="N/A"
    if plant.plantspread.replace(" ","")=="":
        plant.plantspread="N/A"
    if plant.plantform.replace(" ","")=="":
        plant.plantform="N/A"""""
"""plantlist1=[]
for plant in plantlist:
    x = Plant()
    x.nativeadapted = plant.nativeadapted
    x.image = plant.image
    x.name = plant.name
    x.nickname = plant.nickname
    x.planttype = plant.planttype
    x.lightreq = plant.lightreq
    x.waterdemand = plant.waterdemand
    x.landscapeuse = plant.landscapeuse
    x.ornamentalvalue = plant.ornamentalvalue
    x.wildlifevalue = plant.wildlifevalue
    x.season = plant.season
    x.plantform = plant.plantform
    x.plantspread = plant.plantspread
    x.plantheight = plant.plantheight
    x.deciduousevergreen = plant.deciduousevergreen
    x.soil = plant.soil
    x.reproduction = plant.reproduction
    x.note = plant.note
    x.sciname = plant.sciname
    x.lat = plant.lat
    x.long = plant.long
    x.econregion = plant.econregion
    x.statepark = plant.statepark
    x.lifecycle = plant.lifecycle
    x.edibility = plant.edibility
    x.zones=plant.zones
    x.endangered=plant.endangered
    plantlist1.append(x)
    #x.edibility = plant.edibility"""
with open('plantlist.txt','wb') as fp:
    pickle.dump(plantlist,fp)
Plant.plantcsv(plantlist)

#web.get("")