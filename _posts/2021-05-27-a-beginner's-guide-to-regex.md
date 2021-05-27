---
layout: post
title:  "A Beginner's Guide to Regex"
date:   2021-05-27
tags: 
    - regex
    - data analytics
    - guide
    - tutorial
    - skills
author: William Feng
image: /assets/images/blog/21-05-27.jpeg
excerpt_separator: <!--more-->
---

We all know about how command F (or crtl+F) allows you to instantly search for a particular word within thousands of lines in a file or webpage. But what if we wanted to search with more parameters on the results? Is there a more powerful alternative to find matches straight from our terminal? The answer is YES – and it’s Regex!
<!--more-->

## What is Regex?

A **reg**ular **ex**pression (or regex for short) is a string that specify search patterns, and is incredibly useful for extracting information from any text. It is commonly used for ‘find and replace’ operations, web scraping and checking strings (such as validating emails or testing if there are any spelling errors in a word). This blog post is a general guide into the basics of regex, with a question set provided at the end for you to test your understanding. I suggest that you follow along and check out [Regex101](www.regex101.com) or [RegExr](https://regexr.com/) to write your own regex patterns and then testing them against some strings which you supply.

# Regex Syntax

## Anchors
Anchors do not match any character, but instead specify the position in a string that the regex should match.
- `^` denotes the start of a string
- `$` denotes the end of a string

Let’s say you wanted to match the word ‘he’. If you just have `he` as the regex, you’ll have a series of other words returned, since the command will literally return any string that contains ‘he’ anywhere. Now, if we tried `^he`, then we’ll match words like ‘hear’ and ‘hexagon’, since this means we want ‘he’ to appear at the start of the string. Similarly, if we tried `he$`, then we’ll match words like ‘loathe’ and ‘backache’ since it now means we want ‘he’ to appear at the end of the string. Meanwhile, if we have both anchors inside the regex like `^he$`, then this means that we want to match all words which are strictly ‘he’.

## Character sets
A character set is used to match a single character out of several specified characters wrapped around square brackets.
- `[]` to match any character inside the set
- `-` to denote a range inside a set
- `^` to exclude the characters inside a set (not to be confused with its anchor meaning from above)

For example, `[jmy]et` will match any of the words: jet, met and yet (again, remember that there are many other words that this regex could match, as there are no anchors).
We can also conveniently use ranges such as `[a-z]`, `[D-K]` and `[0-9]` to specify the corresponding letters or digits without having to list them out in an inefficient manner.
Now, what if we wanted all the characters except for a particular few? Say I wanted to match any character instead of the letters 'p', 'q', 'r', 's' and 't'. In this case, we can write `[^p-t]`, where the caret symbol `^` negates the character set. You may be wondering: doesn’t the `^` anchor specify the start of a string? Well, the caret symbol has two meanings depending on the context (whether `^` is the first character of a regex or if it’s inside a pair of square brackets).

## Special Characters
So far, we have only been restricted to literal characters, but regex also has a few characters with special meanings that enable this tool to be so effective in its pattern matching.
- `.` matches any one character (except a new line \n)
- `*` matches zero or more repetitions of the previous character
- `?` matches zero or one occurrences of the previous character
- `+` matches one or more occurrences of the previous character
- `{n}` matches n occurrences of the previous character

The period acts as a wildcard that matches any character (could be a letter, digit or symbol). So `b.e` can match ‘bee’ and ‘bye’, as well as ‘b5e’ and ‘b!e’ if we are not restricted to a dictionary input.
Now, let’s consider the regex `.*`: it denotes having zero or more of any character, and this is the most common pattern you’ll encounter when writing regex. Therefore, `^b.*e$` means that we want to find complete words starting with the letter ‘b’ and ending with the letter ‘e’. This will return words including ‘be’, ‘beware’ and ‘brilliance’. A demonstration of this with different test strings using Regex101 can be found in Figure 1 below. I won’t go into too much depth into some of the other quantifier symbols above, since their usage is very similar to the asterisk above.  

![Different matches from the regex 'h.*t.r'](/assets/images/blog/21-05-27-fig1.png)
_Figure 1: Using Regex101 to highlight the different words that could be matched from a regex pattern_

However, what if we wanted to check whether a user created a valid 6-digit pin? Something like `[0-9]+` will not work, since it would match even if the user entered in 4 digits. One way is to have `[0-9][0-9][0-9][0-9][0-9][0-9]` but as you can see, this is very tedious and clunky. Instead, we can specify the quantity by wrapping the number of repetitions around curly braces `{}` afterwards. Thus, a simple solution to the given question would be to write `[0-9]{6}`.

## Alternation
Alternation allows for matching a single regex out of several alternatives and can be treated as the union of strings.
- `abc|xyz` matches either ‘abc’ or ‘xyz’

We use the pipe or vertical bar `|` symbol to match a group of characters on either side. This is not to be confused with the character set above, since the characters inside the square brackets are only to denote a single character in the matching string. Therefore, `cat|dog` will match either ‘cat’ or ‘dog’ whereas `[cat][dog]` will match strings including ‘cd’, ‘ad’ and ‘to’.
Note that you will need to use parentheses `()` if the alternation appears in the middle of a string. As an example, `s(ol|am)e` will match ‘sole’ and ‘same’. If you wrote `s[ol][am]e`, then ‘some’ would be matched instead.

## Escaping
Since some characters have special meanings, we need a way to differentiate between their roles in regex syntax and their literal presence in a string. This is where escaping comes in.
- `\` escapes the meaning of a special character

Let’s say you wanted to return all the phone numbers on a website that exist in the format XXXX-XXXX. One common mistake is to write the regex as `[0-9]{4}-[0-9]{4}` since the hyphen actually has a special meaning of indicating a range, and so the hyphen between two brackets makes no sense. Instead, we need to escape its special meaning by writing `[0-9]{4}\-[0-9]{4}`.
As a fun fact, you would have to write `\\` if you wanted to match a literal backslash, since the first one escapes the special meaning of the second backslash.

## Flags
Regular expressions are sometimes delimited with forward slashes `/` in certain programming languages and contexts. They may have flags that affect the search, and here, I’ll be briefly describing the uses of the `g` and `i` flags.
- `/regex/g` denotes global matching
- `/regex/i` denotes insensitive case

By default, a regex will only return the first match, and so if you wanted to return multiple matches, you would need to enable the `g` flag. Additionally, if you don't want to specify any difference between uppercase and lowercase in your regex matching, you can enable the `i` flag. In Figure 2 below, the first two lines are not matched since the regex pattern is not case-sensitive, and only matches the third line since only the first match is returned.

![Different matches from the regex 'awesome' with no flags](/assets/images/blog/21-05-27-fig2.png)
_Figure 2: Using Regex101 to highlight the matching when there are no flags enabled_

# Questions
At this point, hopefully you’ve acquired a basic understanding of how to write regular expressions. Now it’s time to put your skills into practice. Don’t worry if nothing really clicks just yet, as I’m sure you’ll get the hang of it once you attempt some of these questions.

First of all, <a href="/assets/images/blog/21-05-27-dictionary.txt" download="dictionary">click here</a> to download a text file of the English dictionary. *Note that there are many variations to a dictionary file, so please make sure that you download this version to correctly answer the following questions.*

Open up a new terminal and move to the directory containing the dictionary text file that you’ve just downloaded. Directly from the command line, we use a command called `grep` in order to find matches using the regex. As a general tip, we should also include the `-E` flag (or `egrep` for short) so that we can handle extended regular expressions with special characters. Then, the regex should be enclosed in single quotation marks (we don’t need to delimit with slashes in this case), followed by the filename. Therefore, the basic format for you to answer the following questions for a certain regex should be: `egrep ‘regex’ dictionary.txt`

We can find the number of occurrences from the match by piping (adding a vertical bar to) the output with `wc -l`, which prints the number of lines. To display only the first or last ‘k’ results, pipe it with `head -n k` or `tail -n k` respectively, where ‘k’ is 10 by default.

For example, if we wanted to find out the number of words containing the letters ‘st’ consecutively, it would be written as: `egrep 'st' dictionary.txt | wc -l`

Now, it’s your turn! Have a go at answering the following questions. To make it slightly easier for you, I have provided the expected output beneath each of these questions. If you are unsure how to do at a particular question, scroll down to find the sample solutions (hide them before attempting a question).

---

**1. How many words begin with the letter ‘z’?**  
*1043*<br><br>
**2.	How many 3-letter words end with ‘at’?**  
*16*<br><br>
**3.	How many words have exactly 20 letters?**  
*204*<br><br>
**4.	How many words have the letter ‘q’ followed by a letter that is not ‘u’?**  
*67*<br><br>
**5.	How many words do not have any vowels?**  
*219*<br><br>
**6.	How many words have the double letters ‘ll’ or ‘mm’ or ‘nn’?**  
*16954*<br><br>
**7.	How many words begin with a letter from the first half of the alphabet (‘a’ – ‘m’), followed by a letter from the second half of the alphabet (‘n’ – ‘z’), and then continues to alternate between letters from the first and second half of the alphabet?**  
*927*<br><br>
**8.	List the first 10 words that begin with the letter ‘s’, with the letter ‘w’ as the 3rd last character.**  
*takeaway*  
*takedowns*  
*tallowed*  
*tallower*  
*talweg*  
*taniwha*  
*tarrowed*  
*tattowed*  
*tawas* 
*tawed*<br><br>
**9.	List the last 6 words with 5 vowels that appear in the order ‘a’, ‘e’, ‘i’, ‘o’, ‘u’.**  
*sacrilegiousnesses*  
*sarraceniaceous*  
*supercalifragilisticexpialidocious*  
*ultrareligious*  
*ultraserious*  
*valerianaceous*<br><br>
**10.	List all words with strictly 5 vowels that appear in the order ‘a’, ‘e’, ‘i’, ‘o’, ‘u’.**  
*abstemious*  
*abstemiously*  
*abstentious*  
*arsenious*  
*caesious*  
*facetious*  
*facetiously*  

## Sample Solutions
<button onclick="myFunction()">Show/Hide Code</button>
<div id="Solutions" style="display:none" markdown="1">
1.	`egrep '^z' dictionary.txt | wc -l`
2.	`egrep '^.at$' dictionary.txt | wc -l`
3.	`egrep '^[a-z]{20}$' dictionary.txt | wc -l`
4.	`egrep 'q[^u]' dictionary.txt | wc -l`
5.	`egrep '^[^aeiou]*$' dictionary.txt | wc -l`
6.	`egrep 'll|mm|nn' dictionary.txt | wc -l`
7.	`egrep '^([a-m][n-z])*$' dictionary.txt | wc -l`
8.	`egrep '^t.*w..$' dictionary.txt | head`
9.	`egrep 'a.*e.*i.*o.*u' dictionary.txt | tail -n 6`
10.	`egrep '^[^aeiou]*a[^aeiou]*e[^aeiou]*i[^aeiou]*o[^aeiou]*u[^aeiou]*$' dictionary.txt`
</div>
<br>
*Note that we should technically use `[a-z]` instead of the `.` wildcard to specify that we want to begin with a letter, but it’s fine in this case since we are in the context of a dictionary (i.e. there would be no numbers or other symbols anyways).*

*Another comment is that we do not need any flags for this purpose, since all the words are on a separate line and in lower case.*

## Conclusion
If you could make it all the way, especially as a beginner – congratulations! Well done for having an attempt at the questions, and don’t be let down if you weren’t able to complete some of them (after all, they’re supposed to be challenging). Regex is such a powerful tool, so of course, the content covered in this guide has only been the tip of the iceberg. If you have found it interesting, please take the effort to dive deeper into aspects such as bracket capturing, greedy matching, and lookaheads. Be sure to check out some of the provided links below for further references, examples, and more advanced topics.
- <https://www.sitepoint.com/learn-regex/>
- <https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285>
- <https://www.keycdn.com/support/regex-cheatsheet>
- <https://www.regular-expressions.info/tutorial.html>
- <https://www.rexegg.com/regex-python.html>

<script>
function myFunction() {
  var x = document.getElementById("Solutions");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>