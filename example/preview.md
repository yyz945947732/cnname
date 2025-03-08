
# API Preview

## cnname()

咸霭

## cnname("彭")

彭刚元

## cnname(5)

柔欣弘,奕筠蕊,折明,太叔涛,彤翊

## cnname("姚", 5)

姚晖,姚芬博,姚策子,姚明,姚贞

## cnname({ count: 5 })

逄兴功,缪利薇,曾英,司徒世,雪丽彬

## cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true })

顾辞辞,任亮亮,雀仪仪,泰寒寒,糜攀攀

## cnname({ count: 5, surname: "张" })

张秋,张泰凌,张晗丽,张涵,张焕莉

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张柏丽,张幽荣,张棋昕,张勤博,张梅廉

## cnname({ count: 5, unique: true, nameType: "surname" })

蒲,邝,东,马,公孙

## cnname({ count: 5, unique: true, nameType: "givenName" })

哲,山泽,莺,旺,风

## cnname({ count: 5, unique: true, surnameType: "single", givenNameLength: 1 })

首秋,师永,包龙,詹轩,用谦

## cnname({ count: 5, unique: true, surnameType: "compound", givenNameLength: 1 })

鲜于霄,南门山,赫连驰,濮阳翊,司寇惠

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

公良安,罗倩,乔安,钱瑶,乔达

## cnname({ count: 5, unique: true, surnameType: "single-common", givenNameLength: 1 })

文姣,任驰,尹泉,姚影,明娴

## cnname({ count: 5, unique: true, surnameType: "compound-common", givenNameLength: 1 })

公冶昭,上官芸,公冶茜,令狐青,夏侯岑

## getSurname()

廖

## getSurname(5)

淳于,徭,扈,胡,戈

## getCompoundSurname()

百里

## getCompoundSurname(5)

凃肖,申屠,辗迟,颛孙,公羊

## getGivenName()

栋平

## getGivenName(5)

词,涵冠,邦,昭飘,勤

## isSurname("张")

true

## isSurname("笑")

false
