option = {
    series: [
        {
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [
                {value: 1118, name: '搜索引擎',
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                colorStops: [
                                    // !! 在此添加渐变过程色 !!
                                    { offset: 0, color: '#FED1B4' },
                                    { offset: 1, color: '#FD99BD' }

                                ]
                            }
                        }
                    }},
                {value: 1090, name: '直接访问',
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                colorStops: [
                                    // !! 在此添加渐变过程色 !!
                                    { offset: 0, color: '#57BAF5' },
                                    { offset: 1, color: '#12FFF7' }
                                ]
                            }
                        }
                    }
                },
                {value: 1200, name: '邮件营销',itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                colorStops: [
                                    // !! 在此添加渐变过程色 !!
                                    { offset: 0, color: '#4499FF' },
                                    { offset: 1, color: '#99C9FF' }
                                ]
                            }
                        }
                    }}
            ]
        }
    ]
};