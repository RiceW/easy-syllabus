import json
import re
from datetime import datetime as d
"""
def lambda_handler(event, context):
    filePath= event;
    filePath="286237.png"
    bad_chars = [';', ':', '!', "*", ']', "[" ,'"', "{" , "}" , "'",","]
    
    s3BucketName = "ocr-test-bucket-for-react"
    documentName = filePath
    textract = boto3.client('textract')
    
    # Call Amazon Textract
    response = textract.detect_document_text(
        Document={
            'S3Object': {
                'Bucket': s3BucketName,
                'Name': documentName
            }
        }
    )
    print(response)
    
    result=[]
    processedResult=""
    for item in response["Blocks"]:
        if item["BlockType"] == "WORD":
            result.append(item["Text"])
            element = item["Text"] + " "
            processedResult += element
        elif item["BlockType"] == "LINE":
            print(item)
        
    return {
        "statusCode": 200,
        "body": processedResult,
        "block": response["Blocks"]
    }
"""
from table import * 

def tableConstructor(): 
    tableID = []
    cellID = [] 
    textID = []
    coordinates = []
    words = []
    output = []
    smallDictionary = {}
    for items in table["Blocks"]:
        if items["BlockType"] == "TABLE":
            tableID.append(items["Id"])
    for items in table["Blocks"]:
        if items["Id"] == str(tableID[1]):
            print(tableID)
            cellID = items["Relationships"][0]["Ids"]
    for items in table["Blocks"]:
        if items["BlockType"] == "CELL":
            for cells in cellID:
                if cells == items['Id']:
                    textID.append(items["Relationships"][0]["Ids"][0])
                    filler = []
                    filler.append(items["RowIndex"])
                    filler.append(items["ColumnIndex"])
                    filler = str(filler[0]) + "-" + str(filler[1])
                    coordinates.append(filler)
    for items in table["Blocks"]:
        if items["BlockType"] == "LINE":
            for text in textID:
                if text == items["Relationships"][0]["Ids"][0]:
                    words.append(items["Text"])
    target = "2019"

    for items in words:
        temp = words.index(items)
        if target in items:
            items = items.replace(".","")
            try:
                words[temp] = str(d.date(d.strptime(items,'%A, %B %d, %Y')))
            except ValueError:
                words[temp] = str(d.date(d.strptime(items,'%A, %B %d,%Y')))
    smallDictionary = dict(zip(coordinates,words)) 
    
    divider = "-"
    count = 1
    assignment = 2
    date = 3 
    
    for keys in smallDictionary:
        rows = count + 1
        mid = keys.index(divider)
        if rows == key.index[mid-1]:   
            
        print(mid)
    
tableConstructor()
"""




for keys in smallDictionary:
    mid = keys.index(divider)
    if 
        tempDict = {}
        tempDict["id"] = str(count) 
        tempDict["date"] = 


#print(d.date(d.strptime('Sunday, November 10, 2019','%A, %B %d, %Y')))
#print(d.now().year)
"""
