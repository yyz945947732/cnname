
# API Preview

## cnname()

祝利仪

## cnname("彭")

彭韬霜

## cnname(5)

朱逸承,郑森善,胡华泓,罗峻,傅富

## cnname("姚", 5)

姚超柏,姚卓桂,姚景,姚可,姚华彩

## cnname({ count: 5 })

汪皓,易军鸿,龙语军,巢霞,石竹信

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

邓彩彩,蔡漪漪,江滨滨,欧璋璋,许基基

## cnname({ count: 5, surname: "张" })

张炫,张祥天,张奇,张鸿基,张永利

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张楠垒,张泽子,张熙予,张昕铭,张波然

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊城,李俊冠,李俊利,李俊焱,李俊杰

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张懿英,张彬英,张少英,张惠英,张森英

## cnname({ count: 5, unique: true, part: "surname" })

邵,卢,武,祝,吴

## cnname({ count: 5, unique: true, part: "givenName" })

宇毓,嫣,坤善,骏,依

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

逄哲,宣甜,甄梧,余全,窦凌

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

钟离希,皇甫光,步都宇,羊舌倩,宇文烈

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

聂超,冯栋,何慧,石滨,于志

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

薛威,宋展,谢衡,严钜,丁烁

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

司徒梧,上官焰,上官馨,慕容勋,夏侯美

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

李钰佳,李昆,张彤阳,李鑫,李俐

## cnname({ count: 5, unique: true, givenNameType: "male" })

田辉,丁炜东,曹光毓,袁富冠,长孙弘

## cnname({ count: 5, unique: true, givenNameType: "female" })

李韵,林心俪,郝彤,石琳,熊岑

## cnname({ count: 5, unique: true, givenNameType: "metal" })

曹鑫钜,毛锴,常钜钜,张锐,章钟

## cnname({ count: 5, unique: true, givenNameType: "wood" })

翁柏榆,陈桂,钱樱,李棠杰,郝桦

## cnname({ count: 5, unique: true, givenNameType: "water" })

崔湛,樊漪涛,蒋涛,韩海,金涵

## cnname({ count: 5, unique: true, givenNameType: "fire" })

郭灿,陆炀晗,蔡焰全,岑煜,郑炀炀

## cnname({ count: 5, unique: true, givenNameType: "earth" })

孟坡,单坡宸,庄岱坤,袁腾坡,王岱

## cnname({ count: 5, unique: true, givenNameType: "all" })

崔钜锴,姚昱炎,谢绣,杜勇,余芳岱

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,俞,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,施,屈,祝,聂,司,伍,柯,樊,章,童,费,卫,倪,严,宿,翁,甄,申,应,车,巢,关,蒲,符,柏,佟,蒙,牛,佘,瞿,甘,莫,房,裴,翟,詹,明,成,廉,岑,阮,麦,涂,蓝,雷,丘,闻,庞,党,左,上官,欧阳,司马,夏侯,诸葛,东方,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("common").length

170

## getAllSurname("common-compound")

上官,欧阳,司马,夏侯,诸葛,东方,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("common-compound").length

18

## getAllSurname("common-single")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,俞,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,施,屈,祝,聂,司,伍,柯,樊,章,童,费,卫,倪,严,宿,翁,甄,申,应,车,巢,关,蒲,符,柏,佟,蒙,牛,佘,瞿,甘,莫,房,裴,翟,詹,明,成,廉,岑,阮,麦,涂,蓝,雷,丘,闻,庞,党,左

## getAllSurname("common-single").length

152

## cnnamestr()

高安榆

## cnnamestr("彭")

彭野

## cnnamestr(5)

吴锡娜,金运,章湛威,萧旭翊,郝霏婷

## cnnamestr("姚", 5)

姚军野,姚雨,姚锡,姚冠永,姚亦健

## cnnamestr({ count: 5 })

欧富光,汪星文,韩岱,苏展星,胡甜

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

廖弘弘,苏倩倩,范梁梁,杨钰钰,薛乔乔

## parseName("张三")

{"surname":"张","givenName":"三"}

## parseName("笑三")

{"surname":"","givenName":"笑三"}

## parseName("三")

{"surname":"","givenName":"三"}

## parseName("")

{"surname":"","givenName":""}

## parseName("欧阳三")

{"surname":"欧阳","givenName":"三"}
