f1=1

def fib(n):
  global f1
  if n<3:
    return 1  # 코드1
  f1+=1
  return fib(n - 1) + fib(n - 2)

n=int(input())

fib(n)

print(f1,n-2)