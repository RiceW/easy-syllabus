import json
import boto3
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