import re
# Part 1
def is_character_match(s1, s2):
	str1 = re.sub(r'[^\w]', '', s1.lower())
	str2 = re.sub(r'[^\w]', '', s2.lower())
	char1 = {}
	for char in str1:
		char1[char] = char1[char] +1 if char in char1 else 1
	for char in str2:
		if char not in char1:
			return False
		char1[char] -= 1
		if char1[char] < 0:
			return False
	return True


# Part 2
def anagrams_for(word, list_of_words):
	ans = []
	for w in list_of_words:
		if is_character_match(word, w):
			ans.append(w)
	return ans
