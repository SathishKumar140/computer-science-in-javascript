# The Algorithm Design Manual by Steven S

> When I first learned about mathematical induction it seemed like complete magic. You proved a formula like 􏰆ni=1 i = n(n + 1)/2 for some basis case like 1 or 2, then assumed it was true all the way to n − 1 before proving it was true for general n using the assumption. That was a proof? Ridiculous!

>When I first learned the programming technique of recursion it also seemed like complete magic. The program tested whether the input argument was some basis case like 1 or 2. If not, you solved the bigger case by breaking it into pieces and calling the subprogram itself to solve these pieces. That was a program? Ridiculous!

```
- Any algorithm with n! running time becomes useless for n ≥ 20.
- Algorithms whose running time is 2n have a greater operating range, but become impractical for n > 40.
- Quadratic-time algorithms whose running time is n2 remain usable up to about n = 10, 000, but quickly deteriorate with larger inputs. They are likely to be hopeless for n > 1,000,000.
- Linear-time and n lg n algorithms remain practical on inputs of one billion items.
- An O(lg n) algorithm hardly breaks a sweat for any imaginable value of n.
```

> n!≫2n ≫n3 ≫n2 ≫nlogn≫n≫logn≫1
