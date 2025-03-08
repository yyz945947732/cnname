
# API Preview

## cnname()

古浩

## cnname("彭")

彭晗

## cnname(5)

糜霜,贡茜,母奇,蒯维辉,舄丽

## cnname("姚", 5)

姚克彦,姚丽升,姚贤昕,姚琦韵,姚亮树

## cnname({ count: 5 })

春枫鸿,俞岩,才瑞,汉茜瑞,易君保

## cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true })

戚睿睿,百庆庆,蹇谦谦,端环环,殷宜宜

## cnname({ count: 5, surname: "张" })

张先,张鹤聪,张枫,张斌,张轮

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张鹤力,张和静,张庆章,张树婵,张若美

## cnname({ count: 5, unique: true, part: "surname" })

漆雕,琦,候,温,东方

## cnname({ count: 5, unique: true, part: "givenName" })

爱,素,朋岩,聪,涛雅

## cnname({ count: 5, unique: true, surnameType: "single", givenNameLength: 1 })

蓟豪,栗庆,邬端,恭达,仇瑾

## cnname({ count: 5, unique: true, surnameType: "compound", givenNameLength: 1 })

钟离竹,单于园,闾丘晶,夏侯顺,步都楠

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

莫雪,范玉,邓冰,史豪,宇文强

## cnname({ count: 5, unique: true, surnameType: "single-common", givenNameLength: 1 })

明豪,宣川,车楠,樊远,姚莺

## cnname({ count: 5, unique: true, surnameType: "compound-common", givenNameLength: 1 })

宇文敬,澹台莺,南宫影,东方月,闾丘达

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张霭,李琼勇,李航,张闻,李江

## getSurname()

袭

## getSurname(5)

苟,士,揭,权,掌

## getCompoundSurname()

辗迟

## getCompoundSurname(5)

司马,漆雕,司马,公羊,相查

## getGivenName()

梦飘

## getGivenName(5)

赋,凝凌,炎,利富,娟

## isSurname("张")

true

## isSurname("笑")

false
