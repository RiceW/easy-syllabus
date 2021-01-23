import json
import re

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

def organizeText(): 
    tableID = []
    cellID = [] 
    textID = []
    finalDictionary = {}
    for items in table["Blocks"]:
        if items["BlockType"] == "TABLE":
            tableID.append(items["Id"])
    for items in table["Blocks"]:
        if items["Id"] == str(tableID[2]):
            cellID = items["Relationships"][0]["Ids"]
    for items in table ["Blocks"]:
        if items["BlockType"] == "CELL":
            for cells in cellID:
                if cells == items['Id']:
                    textID.append(items["Relationships"][0]["Ids"][0])
                    filler = []
                    filler.append(items["RowIndex"])
                    filler.append(items["ColumnIndex"])
                    fillerText = str(filler[0]) + "-" + str(filler[1])
                    finalDictionary[fillerText].append("")
    print(finalDictionary)
        
        
      
            

            
    
organizeText()

