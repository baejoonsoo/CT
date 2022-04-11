number=int(input())

count=0

while number!=1:
  if number%3==0:
    number/=3
  elif number%2==0:
    number/=2
  else:
    number-=1
  count+=1

print(count)