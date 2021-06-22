option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },

    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['15%', '20%'],
            itemStyle: {
                borderRadius: 5,
                borderColor: '#fff',
                borderWidth: 2
            },
            data: [
                {value: 1000, name: '未到期理财',
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                colorStops: [
                                    // !! 在此添加渐变过程色 !!
                                    { offset: 0, color: '#32437D' },
                                    { offset: 1, color: '#32437C' }
                                ]
                            }
                        }
                    }},
                {value: 500, name: '未到期理财',
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                colorStops: [
                                    // !! 在此添加渐变过程色 !!
                                    { offset: 0, color: '#93D2FF' },
                                    { offset: 1, color: '#2C89F6' }
                                ]
                            }
                        }
                    }},
            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['65%', '90%'],
            itemStyle: {
                borderRadius: 20,
                borderColor: '#fff',
                borderWidth: 2
            },
            data: [
                {value: 1000, name: '未到期理财',
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                colorStops: [
                                    // !! 在此添加渐变过程色 !!
                                    { offset: 0, color: '#32437D' },
                                    { offset: 1, color: '#32437C' }
                                ]
                            }
                        }
                    }},
                {value: 500, name: '未到期理财',
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                colorStops: [
                                    // !! 在此添加渐变过程色 !!
                                    { offset: 0, color: '#FFC7C7' },
                                    { offset: 1, color: '#FA3C7B' }
                                ]
                            }
                        }
                    }},

            ]
        }
    ]
};