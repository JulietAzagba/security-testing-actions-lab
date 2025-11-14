##  question
## Do these results match what you found in your previous peer review? Why or why not?
- Yes, the results match what I found in my previous peer review because both identified security risks such as unsafe system commands and potential SQL injection issues. However, the automated scanners provided more detailed explanations and pinpointed exact lines in the code that needed attention, which made the results more specific and reliable than the manual review.

## Do you think they caught all the vulnerabilities present in the code? Why or why not?
- No, they did not catch every possible vulnerability. Automated scanners are very effective at detecting known patterns of insecure code, but they can miss logic flaws or runtime errors that depend on how the program behaves during execution. Manual review and testing are still needed to find those kinds of issues.

## Why is using multiple code scanners better than using one?
-Using multiple code scanners is better because each tool focuses on different types of issues. For example, Bandit specializes in Python-specific vulnerabilities, CodeQL analyzes deeper logic flaws across languages, and Super Linter checks for syntax and formatting errors. Together, they provide more complete and layered security coverage.