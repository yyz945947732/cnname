
# API Preview

## cnname()

闽瑞

## cnname("彭")

彭兰

## cnname(5)

潘韵,载维露,邝生,孟江,方梦

## cnname("姚", 5)

姚奋,姚惠楠,姚端荔,姚辉峰,姚光

## cnname({ count: 5 })

沐庆,南毅,板澜,粟朝,斯羽

## cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true })

说哲哲,禚滢滢,衅烁烁,孟轩轩,万俟攀攀

## cnname({ count: 5, surname: "张" })

张川,张琛,张禧,张环佳,张琦

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张德山,张画河,张卓礼,张昌俐,张河厚

## cnname({ count: 5, unique: true, part: "surname" })

乙,谢,权,雍,项

## cnname({ count: 5, unique: true, part: "givenName" })

松馨,涛,俭,友,然谦

## cnname({ count: 5, unique: true, surnameType: "single", givenNameLength: 1 })

牛固,零榕,曾可,南艺,戊玲

## cnname({ count: 5, unique: true, surnameType: "compound", givenNameLength: 1 })

步都翰,上官君,拓跋慧,颛孙瑾,皇甫璐

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

梁禄,诸葛勤,秦晗,丰子,廖舒

## cnname({ count: 5, unique: true, surnameType: "single-common", givenNameLength: 1 })

卢建,薛保,裴露,孔霭,佟瀚

## cnname({ count: 5, unique: true, surnameType: "compound-common", givenNameLength: 1 })

夏侯楠,南宫邦,慕容腾,澹台晗,东方振

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张升建,张时海,李楠,张安,张骏攀

## isSurname("张")

true

## isSurname("笑")

false
