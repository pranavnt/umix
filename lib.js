localStorage.setItem("toggle", false);

// Create a button element
const button = document.createElement("button");
const img = document.createElement("img");
img.src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvAAAALwCAYAAADxpkF6AAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nO3debBtVX0n8O97PCYZ1acMAhEVGdsYJY6tiPMQJ9pOHJJnmVbSGCvE2E5pY6hIbO1KLIndSYxJtOnY2iDVivOAtiAYBaOABhyRNNo+QRAUZHjv3f5j39t3OuM9ezjrnM+napXFu2ev9Vv73Cq/d5111k4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgI351SQvmuD6I5KcVlMtAADAELsl+XGSs5PsO+a1z03ykySn1F0UAADQ398mWUhydZJfGeH1eyc5a/GaW5Ps01xpAADAWk9LFcYXktye5LVJNvd57XFJrljx+g+0USAAALBs9yQ3ZjmULyT5VJKD17xuW6oV95Wve0F7ZQIAAEv+e1YH84Uk25M8NcnWJOf3+PntSfbvolgAAJh3z8n6gL6QZGeS6/v87MOdVAoAAGSvJLekd1Dv117cSaUAAECS5JyMHt7vTHKPbsoEStbvG/IAwPjOG+O1n031xVeAsQjwAFCPfVIdJzmqByR5SEO1AAAAAxyf5MqMt/99aRvNGbGgBgAArdiU5PRUx0GOG95Xtk8nOaTl2gEAYK5sTXUM5CTBfe2Z8eNswQEAAEb0+CQ/SH3hfantSnJWkj3amwoAAMyuLan2rO9M/eF9Zbs0yVHtTAkozaauCwCAgpyY0U6O2ZJqJX1Lj5+dneTiEfq4Jcm5qf5YAAAAGnZBeq+uH9llUQAAzJfNSY7tuogV7pbpDcQvT++tMQAA0KqPpDo6settmMcluTzJ4R3X0c/BWb9X/nWdVgQAwFw6LVUY/WCSe3ZUw7Ykt2a0veRd+kJWB/ijuy0HAIB5dFCSHakC6Y+SPLnFsbcm+VCWA/EftDj2Rrwyy7Ve3nEtAADMsQuz/uzy3Rse83FJrsvqFe37NTzmpA5PdX8Wkryx41oAAJhjp2f9FzS/lOT+DYy1dPb60qr/UrusgbGacGmqeo/ruhAAAObXYVleWV7Zbk7yghrHOSLJRT3GWUjy+hrHadLrknyz6yIAAOBL6f8k0bOT7DNh/6ckuXHAGMdM2H9bjkpyZtdFAADAa9I/XC8kuSrJgzfQ796p9tQP6vuKCWtv20FdFwAAAEdmcMheSHJ7xjsz/vgkV47Q7x/XNQkAAJgnX83wsL2Q5JOpHmzUz6Ykpya5bcT+Tqh/KgAAMPvekNEC99KZ8U/p0cfWJB8eo59vNTYbAACYcUdn9OC98sz4PRavPznrz3Yf1t7c/LQAAGB2/XPGC+ALSb6Y5M+T7NzAtSe2My0AAJhNb8r4IXyj7ZqM/oVYgJm0uesCACjeeS2PtdDiePR3z64LWDQtdQAAFOXbaWcF/pFtTYihHpXknCQHdjT+AUneFycSAQBsyFvTfHi/Lj45niabkvxLku+nCvNteniS7yX5ZsvjAgDMjIel+QD/F63NhlG9I9V7c1eSM9L8H1i7JXltkjsXx/3ThscDAJhZm5Jcm2YD/EmtzYZRPS6r36MLkhza0FiHJ/n8mvEe0tBYAABz4e1pLrxfn2RLe1NhRLsl2Z7V79WPkzyj5nGek+Qna8a5Jk4kAgCYyElpLsD/bYvzYDx/k/Xv19IDu/acsO+9Fvvp9TvxZxP2DQAw1+6b5OI0F+BvSfKbbU2GsTwl/d+3ryR54Ab7PTbJ5QP6diIRAMAG/dskN6XZ/e9L7ewk+7YzLUa0e9Zvb1nZbkty+ph9bkty64A+r4vtMwAAY9svyTvTTnBf2a5J8ogW5sfo3pPh79u5Se4+pJ8Dkrx/hL6cSAQAMKaHJvlW2g/vS62tYwsZzTMz2vv2/SSP7tPHI1Kd7T5KPyc1Mw0AgNmzKdV2iDvSXXhf2T6d5JBGZ8wo9kxyczb2x9dui/+9Y8TrnUgEADCieyX5aLoP7Wvb9iRPb3DejOZ9Gf+Pr0ckuWjM697Z1oQAAEr2hCQ/TPdhvV9bOrZwj6ZuAEM9L+28109qa0IAACXakmp7w850H9JHaZclOaqJG8FQd0vy8zT7/t4Uf6QBAPR13ySXpPtQPm67Jcmp9d8ORnBemn1v393eVAAAytLm2e5NtXOSHFj3jWGgF6bZ9/TX2psKAEAZ9kv1sKSuw3dd7Zokj6r1DjHIfkl+kWbey1uS7NXeVAAApt+JSb6d7kN33c2Z8e36SJp5H9/b5iQAAKbZtJ3t3lT7TJJDa7pn9PeSNPP+ndLmJGCaeRACAPsl+UKa2Wry5iRPHvOau5I8PtVWjLrt2UCfrHZ5Q/1e2VC/AACs8FsZf6X1k51USh1OSXJjmlmBvz7JM9ubCgDAfDow42/NcQRkefZO9SCtNrZCnZ3qzHkAABry8YweznYmObibMtmg45NckXa/z/D1JP+qjckBAMyjl2b0YPa5jmpkfJtSfVpya9oN70vttlRfvgYAoGZbU30xdZRQ9oqOamQ8W5Ocn26C+9p2XpJ7NDtdAID5c0GGB7FdSQ7vqkBGdnKS69J9cF/Zrk3ymCYnDQAwb16e4SHsks6qYxRbUj0Qa0e6D+y92tIDu3ZrZvoAAPPl4FRfUB0UwF7VWXUM80upnhXQdUgfpX0uyWHN3AYAgPkyLADer7vSGODfpLmz3ZtqNyX59SZuBgDAPHll+geuyzqsi97aPNu9qebMeACACRye6ouqvYLW6zusi/WOT3Jlug/gdbRvJHlQvbcHurWp6wIAmCuXJjmxx78fm+TqlmuhtxcneUuSPWvs8+5jvn4hyU9rHP+2VJ8AnVtjnwAAc+F1Wb9CemWnFdGGr2e8VfOLuykTyrC56wIAmCsf6PFv57VeBW0b9z32OwEAMEUuz+rV1hO6LYcWPCjjrcA7kQgAYIq8MctB7Vsd10J7rs5o4d2JRDCELTQAtG3l9oheW2qYTf9rxNfZPgMAMIWuSrXa+tCuC6E1J2a0FfhjuioQAID+zkxyTRxnPG++l8Hh/YruSoNy2EIDQBfOW2wLXRdCqz445Oe2zwAATLH7d10ArXt0Bq/AO5EIAACmyOYkP0jv8O5EIhiRLTQAQFt2pf9pNOe2WQgAAN16RpIjWxzvmCRPbHG8WXJyeq/AP6TLogAAaNeDktyc5EUtjLUtyc/S7h8Ms2S3JNuzOrw7kQgAYA4tPenz7CT7NtD//kneuzjGpQ30P0/eldUB/s+6LQcAgC68JcuB8OrUuyXjYUm+s6L/19XY9zx6alYH+Ed2Ww4AAF341awOhXcmOSOTHdiwKcnpi32t7PvoSQoluyf5Sap7eV0cqgEAMLd6Penz00kO2UBfByX5RI/+Lq+lUv5bqvv5F10XAgBAd96W3iecbE/ytDH6eVaSG/r09cYa651nz0p1P0/quhAAALoz6Emfu5KclWSPAdfvtfiaXQP6Ob6h2ufNnkm+m2RL14UAANCdQU/6XGqXJnlAj2uPSfLVIdd+s9ny584Tui4AAIDu/dcMDuELSW5J8psrrtmW5OcjXHdmKzMAAIA58vgMD+JL7T1Jzh3j9Q9tbxoAADAfej3ps47maaHAVHDuKgCzZmeS8xvo9wOpgjwAAFCztU/6rKM9otUZ9HfPKekDAABqs3uSG1NfeL8u07N95rFJzk6y7wauXXqy7Gm1VgQAADU4O/UF+LNarn2QzUl+mGpP/iPHuO6wJP871Rn3R9RfFgAATObZqS/AP7bl2of5q1R13ZXkjAz/Ttuzs/xk2S82WhkAAGzQ76W+AP/ilmsf5olZXd+nkxzS43W9niz7H1qqEQAARnJAkvel/i+xnpPkwBbnMciWJNdndX3bkzx9xWuOTfK1rJ/H/VutFAAABnh4ku+l/vC+1Mbdd96kv8/6+nYl+c9J/n2S23r8/J86qRQAANbYLclrk9yZ5sL7Uht133nTnpHxa//DTioFAIAVDk/y+TQf3Ne2zyQ5tIX59bNnkp/2qGtQO6aTSgEAYNFzkvwk7Yf3pfbjVCvhXXlvn7p6ta93VCMAAPz/01W6Cu4r267FWvZsdMa9bRujzrd1UB8AAOTYJJen++C+tn0lyQMbnPdaz8ny2e6jtGnZuw8AwBzZluTWdB/W+7Xbkpze2Owrk3760PXefQAA5sABSd6f7gP6qO3cNHNmfF2fPnS9dx+YwKauCwCAIR6Y5F1JDpuwn61J9h/xtT9NcuOE4303ycuSXDthP0u2JfmrJHerqb+FJO9I8upUx28CAMBUOS2jr1A/v6Mae2n604fLkhzV2mwAAGBEByXZkeGB9vaMvlLftEek2SfLLrVbkpza0pwAAGBkF2Z4mP1QZ9Vt3IFJ7kjv+Tyqw7oAAGAip2d4gN/WWXWT+WTWz+X/xrGRAAAU7LBUD17qF97vTHKPzqqbzKlZP593dFoRAADU4B/TP8B/osO6JrU11cOaVs7ncV0WBAAAdXh1+gf4l3VYVx0+l+W5XJ9kS7flAADA5I5M7/C+I8m9O6yrDq/I8nz+puNaAACgNl/N+gD/2U4rqsd9kuxMNZ+ndFwLAADU5g1ZH+B/t9OK6nNJkpuS7NF1IQAAUJejszq870xyaKcV1edVSd7TdREAAFC3b2Q5wF/ccS11um+SZ3ZdBAAA1O1Pshzg/6DjWuo2Cw9vunea28f/3CT7NdQ3AAAN+eUsB/gjO66F3r6R5KzUt59/r8X+LqqpPwAAWvbtJJd2XQR9vSnVH1iXJTlqwr6OS3L5Yn+vnLAvAAA68tYkr+u6CPp6cJY/Jbklyakb7GdbklvjExcAgOI9LNWJNEyv72T1iUHnJjlwxGsPSPL+Ndf7xAUAABr01qw/s//7SR415LqTkvyfHtf6xAUAABr0sKwP4QtJ7kpyRtafuLPb4r/v6HOdT1wAAKBBm5Jcm95hfCHJBVl+CNcRSS4c8NrL2ywcAADm1dvTP5QvJNme5I+S3DjkdX/cduEAADCPHpPBwXzUdnzbhUMTNnVdAACscEiSZyR5dJKDkxyU5LYkP0ryzSQfT/LFJDu7KpBObE5yXarfj436Vux/BwCozcOSfCrJrgxfRd2e5NVJ9u6kUrryl5ls9f1P2y8ZAGD27Jvkf2S04L62/SDJU9ovmY48IZMF+Ie0XzIAwGw5PMlXMlko25HktW0XTie2JLkhG/s9uSa2DTNDduu6AADm0rFJLk5yVJ+f70rytVRPzbwqyc2p9sOv/f+tzUmemOT2xf6YTVuSvCHJk7P+3PdR7Lt43UWpAj0AAGM4NtWXUnutlN6Y6kmZ9+px3QFJfie9n665M9WXX5k9R2Q5eE/aPpvkPu2WDwBQtkHh/ZJUJ88Ms2+S83pcf0OqkM/sOCXDz3Yft12f5NfanAQAQKkGhfePJdlrjL42JfmfPfr5kxrrpTt7Jzkr9Qb3lW1XknfGSUYAAH0NC+97bqDPfZJ8Z01fP1v8d8p1fJIr0lx4X9m+nuSEdqYFAFCOJsL7khf26PPZkxRLZzYlOTXJrWknvC+125Kc3sL8AACK0GR4T5I9Up1Qs7Lfd07YJ+3bmuT8tBvc17YPJLl70xMFAJhmTYf3JR9d0/cXauqXdpyc5Lp0G96X2rVJ/nWz04XJbem6AABm0tFJLkh1dvtan0x1usgdNY31L2v+e5STbJgO905yYpJ3bODaMzL4i883JXnrBvp9eJJvLF4PADAX2lp5X/KXa8b4cc39M50+mMGr6e/urjQAgHK0Hd6T5MNrxvlGA2MwfX4rgwO8s94BAIboIrzvnmqrw8qxPtPAOEyfA1Ntw+r1+3ZLxnuuAADA3OkivCfJ83qMd2ZDYzF9Ppbev3Pv7bIoAIBp11V43yvJVT3GfGRD4zF9/l16/96d0mVRAADTrKvwniR/32PM7ybZ3OCYa21qcaxpHL9r90xyV1b/DtwaT+MFAOjp6CQ/TO/w/ok0uwf5zD7jvqjBMXt5TpLntzzmkucmeXpHY0+TC7L6d+AD3ZYDADCdulx5/099xv1K2l19T5a/SHl22lv13SvJWYvjenJo8vKs/j14QbflAABMn2lcef9Jkvs3OO4gn1is4aokv9zwWMcluWJxvI82PFYpDk6yI9U9uT3J/t2WAwAwXaZx5f2OJI9vcNxhXraill8kOT3N7E3flmp/99JYv93AGKW6KNU9Ob/rQgAApsk0rrzfkeTZDY47iq1Z/0XKD6b6gmUdDkxyzpr+dyS5V039z4LfT3VfXtx1IQAA00J4H+xzWV/fj5I8ecJ+H5fkuh59e1jVaoel+n24R9eFAABMA+F9uFekd527Un3hdPcx+9uS5Iws7+1e206ro+gZ86auCwAAmAbC+2gOTrIzvetdSPKlJPcbsa8jsrynu1fbmeTQGmufFU1+/wIAoAjC+3guSf/QvZDk5gw/4vCUJDcO6eeiBmoHAKBwwvv4XpXBwXup9Tozfu9UW21Guf73G54HAACFmdajIp/V4Lh1uG+qPe+jhPCrkjx48brjs3y2+7C2K9UWGwAASDJ45f1rafZpo6WuvK90WUYL4gupzox/1+L/jnrNl9ubCgAA027QyvtdSR7Y4Nglr7yv9PqMHsY30l7T3lQAAJhmg8L7QpK/a3DsWQnvSXJUmg3wD2hvKgAATKtB22aW2pMaGnsWts2sdWWaCe9fa3MSAABMp+MyeOV9qTWx932WVt5XOiPNBPg/anEOAABMoVHD+80NjD2r4T1JTkgzAf7YNicBAMB0GWXbzMpQvanGsWdx28xaV6Xe8H51u+UDADBNRl15X9kOr2nsWV55X+ntqTfAv63d8gEAmBYbCe8LSV5aw9jzEN43JTk1yW2pN8DfnuS1STa3NxUAALo2zraZte3yTBYe52HbzNYkH069wX1t+1SSg9uaEAAA3dnoyvvK9rINjj0PK+8nJ/lBmg3vS+1HSZ7azrQAAOhCHeF9Ickvkjx6jHE3JXlrn75mJbxvSXVs5M60E96X2q4kZyXZo/EZAgDQqrrC+1K7Lcm2EcY9IMm5ffqYlfD+S0m+kHaD+9r25Xg6KwDAzKg7vK9sFyd5XpL914z5wCR/mOSGPtfNSnh/XpIb0214X2o3J3lRs9MFAKBpTYb3le2uVHu/r0py05DXzkJ43zvV1pWuQ3uvdnaSfZubOgAATZnktJmm2iycNnNCkivT/b0c1K5O8itN3QAAAOonvNdvU5LTU53F3vW9HKXdmeqLtc6MBwCYcsJ7/e6V5CPp/j5upH06ySH13xIAAOogvNfv8WnvbPem2vYkT6v7xgDd2tR1AQBM7Ogkn8t0rbbemeTXk3yo60I26KBUx2XWtQ3lGUkeM8brL0zysZrG3pXqC67ba+oPAIAJWHkvwzMz3j18ejdlAgDQJOG9HHumOq99lHt4S5K9uikTAICmCO/leV9Gu4//0FWBAAA0Q3gv0/My2r18blcFAgBQP+G9XHdL8vMMvpe3JtmnqwIBAKiX8F6+8zL4fp7TXWkAANRJeJ8NL8zge/ob3ZUGAEBdhPfZsV+SX6T3Pb09yf7dlQYAQB2E99nzkfS+r6U+9AoAgEXC+2x6SXrf221dFgUAwGSE99l19yR3ZvW9vTPJPbosCgCAjRPeZ9+nsvr+frzbcgAA2CjhfT78Tlbf45d2Ww4AABshvM+Pg5LsSHWPdyS5d7flAAAwLuF9/nw+1X3+bNeFAAAwHuF9Pv1eqnv9u10XAgDA6IT3+XWfVNtnDu26EAAARiO88+ddFwAAwGiEd5Lkbl0XAADAcMI7AAAUQngHAIBCCO8AAFAI4R0AAAohvAMAQCGEdwAAKITwDgAAhRDeAQCgEMI7AAAUQngHAIBCCO8AAFAI4R0AAAohvAMAQCGEdwAAKITwDgAAhRDeAQCgEMI7AAAUQngHAIBCCO8AAFAI4R0AAAohvAMAQCGEdwAAKITwDgAAhRDeAQCgEMI7AAAUQngHAIBCCO8AAFAI4R0AAAohvAMAQCGEdwAAKITwDgAAhRDeAQCgEMI7AAAUQngHAIBCCO8AAFAI4R0AAAohvAMAQCGEdwAAKITwDgAAhRDeAQCgEMI7AAAUQngHAIBCCO8AAFAI4R0AAAohvAMAQCGEdwAAKITwDgAAhRDeAQCgEMI7AAAUQngHAIBCCO8AAFAI4R0AAAohvAMAQCGEdwAAKITwDgAAhRDeAQCgEMI7AAAUQngHAIBCCO8AAFAI4R0AAAohvAMAQCGEdwAAKITwDgAAhRDeAQCgEMI7AAAUQngHAIBCCO8AAFAI4R0AAAohvAMAQCGEdwAAKITwDgAAhRDeAQCgEMI7AAAUQngHAIBCCO8AAFAI4R0AAAohvAMAQCGEdwAAKITwDgAAhRDeAQCgEMI7AAAUQngHAIBCCO8AAFAI4R0AAAohvAMAQCGEdwAAKITwDgAAhRDeAQCgEMI7AAAUQngHAIBCCO8AAFAI4R0AAAohvAMAQCGEdwAAKITwDgAAhRDeAQCgEMI7AAAUQngHAIBCCO8AAFAI4R0AAAohvAMAQCGEdwAAKITwDgAAhRDeAQCgEMI7AAAUQngHAIBCCO8AAFAI4R0AAAohvAMAQCGEdwAAKITwDgAAhRDeAQCgEMI7AAAUQngHAIBCCO8AAFAI4R0AAAohvAMAQCGEdwAAKITwDgAAhRDeAQCgEMI7AAAUQngHAIBCCO8AAFAI4R0AAAohvAMAQCGEdwAAKITwDgAAhRDeAQCgEMdEeAcAgCII7wAAUAjhHQAACiG8AwBAIYR3AAAohPAOAACFEN4BAKAQwjsAABRCeAcAgEII7wAAUAjhHQAACiG8AwBAIYR3AAAohPAOAACFEN4BAKAQwjsAABRCeAcAgEII7wAAUAjhHQAACiG8AwBAIYR3AAAohPAOAACFEN4BAKAQwjsAABRCeAcAgEII7wAAUAjhHQAACiG8AwBAIYR3AAAohPAOAACFEN4BAKAQwjsAABRCeAcAgEII7wAAUAjhHQAACiG8AwBAIYR3AAAohPAOAACFEN4BAKAQwjsAABRCeAcAgEII7wAAUIjjkvwovUP0rX3+vY3w/qwmJw0AACUaFN4vSnJ4kp/1+bnwDgAALRoU3j+WZK/F113Y5zXCOwAAtGTQnvdPZDm8J8mr+7zOnncAAGjBsJX3Pde8/uAkd/V5vZV3AABo0Dgr7yv9lz7XWHkHAICGjLvyvtI9k1zf51or7wAAULONrryv9JhUgdvKOwAANGiSlfe1tqWe/fBW3gEAoIc6w/uSJyW5sU+fwjsAAGxQHdtm+tma5KwkO/r0b9sMAACMoYmV916OSnJmkn9OsrPPeFbeAQBggLbC+1r3SrK9z7jCOwAA9NBVeE+Sv+4zrvAOAAA9NLnnfZg39RnXnncAAOhBeAcAgEII7wAAUAjhHQAACiG8AwBAIYR3AAAohPAOAACFEN4BAKAQR6a7hzS9uc+4HtIEAAA97Jvkilh5BwCAIrw3Vt4BAKAID02yK+tD9NeS7NPguFbeAQBgAz6e9SH6riRHNzimlXcAANiAeyfZmfVB+t0Njim8AwDABr0kvcP0Uxoaz7YZAACYwDvTO1Dv18BYVt4BAGBC52d9oP55A+MI7wAAUIN/TO8vsG6ucQzhHQAAavKZ9A7X962pf+EdAABq9A/pHbBPq6Fv4R0AAGr2hvQO2Vdmsm00wjsAADTgIekdtCdZhRfeAQCgIZuSXJv+gfukMft6y4C+hHcAAKjBaem/Cv+LJL+dKpwPckCSc/r0IbwDAECNdk/y3fQP8Qupjpv8jSQHrrn2mCT/MckNfa4T3gEAoAGPThW2B4X4hSQ7k/wwybeS3DzktcI7AAA06MUZHuBHbXckeXa75QMAwPw5LcmdmSy8X5/k5LYLBwCAeXVSkuuysfD+5SRHtl8yAADMt72TvCb9v5y6tn0zyfMz2cOfAACKNOy4PmjTHkkem+TpSU5IckiqIyNvSPVl1i8n+WiSf0oV5AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADsRjlQAAAC/SURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJhf/w/HiQkpljkO6wAAAABJRU5ErkJggg==`;
img.alt = "Image Button";

button.appendChild(img);

// Style the button
img.style.position = "fixed";
img.style.bottom = "10px";
img.style.right = "10px";
img.style.zIndex = "9999"; // Ensure the button is on top of other page elements
img.style.width = "150px";
img.style.height = "150px";
img.style.backgroundColor = "#fff"
img.style.borderRadius = "100%";

let isOn = false;

// Add an event listener to the button
img.addEventListener("click", function() {
  console.log("click");
  console.log(localStorage.getItem("toggle"));
  const currentToggle = localStorage.getItem("toggle");
  localStorage.setItem("toggle", currentToggle === "true" ? "false" : "true");
  isOn = !isOn;
  if (!isOn) {
    isClicked = false;
    if (currentPopup) {
      currentPopup.remove();
      currentPopup = null;
    }
    if (selectedElement) {
      selectedElement.classList.remove("highlight-on-hover");
    }
    selectedElement = null;
  }
  console.log(isOn);

  u.addConfetti({});
  u.addConfetti({});
  u.addConfetti({});
});

img.addEventListener("mouseover", function() {
  console.log("mouseover");
  img.style.width = "160px";
  img.style.height = "160px";
  img.style.bottom = "5px";
  img.style.right = "5px";
});

img.addEventListener("mouseout", function() {
  console.log("mouseout");
  img.style.width = "150px";
  img.style.height = "150px";
  img.style.bottom = "10px";
  img.style.right = "10px";
});

img.addEventListener("contextmenu", function(event) {
  event.preventDefault();
  window.location.href = "https://github.com/pranavnt/dubhacks22";
});

// Append the button to the document body
document.body.appendChild(img);

document.head.appendChild(document.createElement("style")).innerHTML = `body {
    margin: 0;
    padding: 0;
  }
  /* Highlight effect on hover */
  .highlight-on-hover {
    outline: 2px dashed rgb(65, 134, 246)  !important;
    background-color: rgba(65, 134, 246, 0.2) !important;
  }

  .umix-popup {
}

.umix-container {
display: flex;
align-items: center;
justify-content: space-between;
background-color: #fff;
border-radius: 8px;
padding: 10px 15px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
width: 350px; /* Adjust to your desired width */
}

.umix-input {
flex: 1;
border: none;
outline: none;
background-color: transparent;
font-size: 1em;
padding: 5px;
}

.umix-button {
background: transparent;
border: none;
}

.arrow-icon {
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
background-color: #004B87;
border-radius: 50%;
}

.arrow-icon svg {
fill: none;
stroke: #fff;
stroke-width: 2;
width: 15px;
height: 15px;
}

  .fade {
    animation: fade-in-out 3s infinite;
  }

  @keyframes fade-in-out {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .slide {
    animation: slide-in 3s infinite;
  }

  @keyframes slide-in {
    0% {
      left: -100%;
    }
    50% {
      left: 0;
    }
    100% {
      left: -100%;
    }
  }

  .rotate {
    animation: rotate 3s infinite linear;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }`;

let selectedElement = null;
let currentPopup = null;
let isClicked = false;

function extractHtmlContent(mixedString) {
  // Match all HTML tags and their content
  const matches = mixedString.match(/<[^>]*>[^<]*<\/[^>]*>|<[^/>]+\/>/g);

  // If matches are found, join them to form the pure HTML content; otherwise, return an empty string
  return matches ? matches.join("") : "";
}

document.addEventListener("mouseover", (e) => {
  console.log(isOn, isClicked);
  if (!isOn) return;
  if (isClicked) return;
  if (e.target?.className.includes("umix-popup")) return;

  // check if the mouse is over the variable named img
  if (e.target === img) return;

  const x = e.clientX;
  const y = e.clientY;
  const element = document.elementFromPoint(x, y);

  if (selectedElement) {
    selectedElement.classList.remove("highlight-on-hover");
  }

  selectedElement = element;

  // Add highlight effect to the selected element
  selectedElement.classList.add("highlight-on-hover");
  console.log(selectedElement);
});

document.addEventListener("keydown", function(event) {
  if (!isOn) return;
  if (event.key === "Escape") {
    isClicked = false;
    if (currentPopup) {
      currentPopup.remove();
      currentPopup = null;
    }
    if (selectedElement) {
      selectedElement.classList.remove("highlight-on-hover");
    }
    selectedElement = null;
  }
});

document.addEventListener("click", (e) => {
  if (!isOn) return;
  if (e.target === img) return;

  if (
    currentPopup &&
    selectedElement &&
    e.target !== selectedElement &&
    !selectedElement.contains(e.target) &&
    e.target !== currentPopup &&
    !currentPopup.contains(e.target)
  ) {
    isClicked = false;
    if (currentPopup) {
      currentPopup.remove();
      currentPopup = null;
    }
    if (selectedElement) {
      selectedElement.classList.remove("highlight-on-hover");
    }
    selectedElement = null;
    return;
  }

  isClicked = true;

  if (!selectedElement) return;
  let currentEl = selectedElement;
  if (
    e.target?.className.includes("umix-popup") ||
    !selectedElement.className.includes("highlight-on-hover")
  )
    return;
  if (currentPopup) {
    currentPopup.remove();
    currentPopup = null;
  }

  // defines text area, button, and popup
  const input = document.createElement("textarea");
  const button = document.createElement("button");
  const popup = document.createElement("div");

  popup.className = "umix-popup umix-container";
  button.className = "umix-popup umix-button";
  input.className = "umix-popup umix-input";
  input.placeholder =
    "Make the text larger or change the colors of this element.";
  input.style.color = "black";
  button.style.color = "black";
  popup.style.position = "fixed";
  const x = e.clientX;
  const y = e.clientY;
  popup.style.left = `${x}px`;
  popup.style.top = `${y}px`;
  popup.style.zIndex = "99999";

  const buttonText = `<span class="arrow-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg>
    </span>`;

  const callback = () => {
    if (!isOn) return;
    currentEl.classList.remove("highlight-on-hover");
    button.textContent = "Loading...";
    fetch("https://dubhacks23-production.up.railway.app/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        html: currentEl.outerHTML,
        edit: input.value,
      }),
    })
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        try {
          console.log(data);
          const html = extractHtmlContent(data.output.output);

          const fragment = document.createElement("div");
          fragment.innerHTML = html;
          button.innerHTML = buttonText;

          currentEl.replaceWith(fragment);
          currentEl = fragment;
        } catch (error) {
          console.error(error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  input.onkeypress = (event) => {
    if (!isOn) return;
    if (event.key === "Enter") {
      event.preventDefault(); // Enter no longer makes a new line
      callback();
    }
  };

  button.onclick = callback;
  button.innerHTML = buttonText;

  popup.appendChild(input);
  popup.appendChild(button);

  document.body.appendChild(popup);

  currentPopup = popup;
  currentEl.classList.add("highlight-on-hover");
});

/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/js-confetti@0.11.0/dist/es/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function t(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } function e(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } function i(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t } function n(t) { return +t.replace(/px/, "") } function s(t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n = Math.random() * (e - t) + t; return Math.floor(n * Math.pow(10, i)) / Math.pow(10, i) } function o(t) { return t[s(0, t.length)] } var a = ["#fcf403", "#62fc03", "#f4fc03", "#03e7fc", "#03fca5", "#a503fc", "#fc03ad", "#fc03c2"]; function r(t) { return Math.log(t) / Math.log(1920) } var h = function() { function e(i) { t(this, e); var n = i.initialPosition, a = i.direction, h = i.confettiRadius, c = i.confettiColors, u = i.emojis, l = i.emojiSize, d = i.canvasWidth, f = s(.9, 1.7, 3) * r(d); this.confettiSpeed = { x: f, y: f }, this.finalConfettiSpeedX = s(.2, .6, 3), this.rotationSpeed = u.length ? .01 : s(.03, .07, 3) * r(d), this.dragForceCoefficient = s(5e-4, 9e-4, 6), this.radius = { x: h, y: h }, this.initialRadius = h, this.rotationAngle = "left" === a ? s(0, .2, 3) : s(-.2, 0, 3), this.emojiSize = l, this.emojiRotationAngle = s(0, 2 * Math.PI), this.radiusYUpdateDirection = "down"; var m = "left" === a ? s(82, 15) * Math.PI / 180 : s(-15, -82) * Math.PI / 180; this.absCos = Math.abs(Math.cos(m)), this.absSin = Math.abs(Math.sin(m)); var p = s(-150, 0), v = { x: n.x + ("left" === a ? -p : p) * this.absCos, y: n.y - p * this.absSin }; this.currentPosition = Object.assign({}, v), this.initialPosition = Object.assign({}, v), this.color = u.length ? null : o(c), this.emoji = u.length ? o(u) : null, this.createdAt = (new Date).getTime(), this.direction = a } return i(e, [{ key: "draw", value: function(t) { var e = this.currentPosition, i = this.radius, n = this.color, s = this.emoji, o = this.rotationAngle, a = this.emojiRotationAngle, r = this.emojiSize, h = window.devicePixelRatio; n ? (t.fillStyle = n, t.beginPath(), t.ellipse(e.x * h, e.y * h, i.x * h, i.y * h, o, 0, 2 * Math.PI), t.fill()) : s && (t.font = "".concat(r, "px serif"), t.save(), t.translate(h * e.x, h * e.y), t.rotate(a), t.textAlign = "center", t.fillText(s, 0, 0), t.restore()) } }, { key: "updatePosition", value: function(t, e) { var i = this.confettiSpeed, n = this.dragForceCoefficient, s = this.finalConfettiSpeedX, o = this.radiusYUpdateDirection, a = this.rotationSpeed, r = this.createdAt, h = this.direction, c = e - r; i.x > s && (this.confettiSpeed.x -= n * t), this.currentPosition.x += i.x * ("left" === h ? -this.absCos : this.absCos) * t, this.currentPosition.y = this.initialPosition.y - i.y * this.absSin * c + .00125 * Math.pow(c, 2) / 2, this.rotationSpeed -= this.emoji ? 1e-4 : 1e-5 * t, this.rotationSpeed < 0 && (this.rotationSpeed = 0), this.emoji ? this.emojiRotationAngle += this.rotationSpeed * t % (2 * Math.PI) : "down" === o ? (this.radius.y -= t * a, this.radius.y <= 0 && (this.radius.y = 0, this.radiusYUpdateDirection = "up")) : (this.radius.y += t * a, this.radius.y >= this.initialRadius && (this.radius.y = this.initialRadius, this.radiusYUpdateDirection = "down")) } }, { key: "getIsVisibleOnCanvas", value: function(t) { return this.currentPosition.y < t + 100 } }]), e }(); var c = function() { function e(i) { var n = this; t(this, e), this.canvasContext = i, this.shapes = [], this.promise = new Promise((function(t) { return n.resolvePromise = t })) } return i(e, [{ key: "getBatchCompletePromise", value: function() { return this.promise } }, { key: "addShapes", value: function() { var t; (t = this.shapes).push.apply(t, arguments) } }, { key: "complete", value: function() { var t; return !this.shapes.length && (null === (t = this.resolvePromise) || void 0 === t || t.call(this), !0) } }, { key: "processShapes", value: function(t, e, i) { var n = this, s = t.timeDelta, o = t.currentTime; this.shapes = this.shapes.filter((function(t) { return t.updatePosition(s, o), t.draw(n.canvasContext), !i || t.getIsVisibleOnCanvas(e) })) } }]), e }(), u = function() { function e() { var i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; t(this, e), this.activeConfettiBatches = [], this.canvas = n.canvas || ((i = document.createElement("canvas")).style.position = "fixed", i.style.width = "100%", i.style.height = "100%", i.style.top = "0", i.style.left = "0", i.style.zIndex = "1000", i.style.pointerEvents = "none", document.body.appendChild(i), i), this.canvasContext = this.canvas.getContext("2d"), this.requestAnimationFrameRequested = !1, this.lastUpdated = (new Date).getTime(), this.iterationIndex = 0, this.loop = this.loop.bind(this), requestAnimationFrame(this.loop) } return i(e, [{ key: "loop", value: function() { var t, e, i, s, o; this.requestAnimationFrameRequested = !1, t = this.canvas, e = window.devicePixelRatio, i = getComputedStyle(t), s = n(i.getPropertyValue("width")), o = n(i.getPropertyValue("height")), t.setAttribute("width", (s * e).toString()), t.setAttribute("height", (o * e).toString()); var a = (new Date).getTime(), r = a - this.lastUpdated, h = this.canvas.offsetHeight, c = this.iterationIndex % 10 == 0; this.activeConfettiBatches = this.activeConfettiBatches.filter((function(t) { return t.processShapes({ timeDelta: r, currentTime: a }, h, c), !c || !t.complete() })), this.iterationIndex++, this.queueAnimationFrameIfNeeded(a) } }, { key: "queueAnimationFrameIfNeeded", value: function(t) { this.requestAnimationFrameRequested || this.activeConfettiBatches.length < 1 || (this.requestAnimationFrameRequested = !0, this.lastUpdated = t || (new Date).getTime(), requestAnimationFrame(this.loop)) } }, { key: "addConfetti", value: function() { for (var t = function(t) { var e = t.confettiRadius, i = void 0 === e ? 6 : e, n = t.confettiNumber, s = void 0 === n ? t.confettiesNumber || (t.emojis ? 40 : 250) : n, o = t.confettiColors, r = void 0 === o ? a : o, h = t.emojis, c = void 0 === h ? t.emojies || [] : h, u = t.emojiSize, l = void 0 === u ? 80 : u; return t.emojies && console.error("emojies argument is deprecated, please use emojis instead"), t.confettiesNumber && console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"), { confettiRadius: i, confettiNumber: s, confettiColors: r, emojis: c, emojiSize: l } }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), e = t.confettiRadius, i = t.confettiNumber, n = t.confettiColors, s = t.emojis, o = t.emojiSize, r = this.canvas.getBoundingClientRect(), u = r.width, l = 5 * r.height / 7, d = { x: 0, y: l }, f = { x: u, y: l }, m = new c(this.canvasContext), p = 0; p < i / 2; p++) { var v = new h({ initialPosition: d, direction: "right", confettiRadius: e, confettiColors: n, confettiNumber: i, emojis: s, emojiSize: o, canvasWidth: u }), g = new h({ initialPosition: f, direction: "left", confettiRadius: e, confettiColors: n, confettiNumber: i, emojis: s, emojiSize: o, canvasWidth: u }); m.addShapes(v, g) } return this.activeConfettiBatches.push(m), this.queueAnimationFrameIfNeeded(), m.getBatchCompletePromise() } }, { key: "clearCanvas", value: function() { this.activeConfettiBatches = [] } }]), e }();
//# sourceMappingURL=/sm/c67b6ad0e5cbbbffac6d59f91cc56ec0ebbc7f312e8a10feab8f9160c2fdbfa7.map
