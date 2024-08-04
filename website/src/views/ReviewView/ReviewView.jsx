import styles from './ReviewView.module.css';
import { SheetComponent } from '@antv/s2-react';
import { useEffect, useState } from 'react';

const ReviewView = () => {
    const initialData = [
        {
            number: 7789,
            province: 'Провинция Чжэцзян',
            city: 'Ханчжоу город',
            type: 'Мебель',
            sub_type: 'стол',
        },
        {
            number: 2367,
            province: 'Провинция Чжэцзян',
            city: 'Шаосин город',
            type: 'Мебель',
            sub_type: 'стол',
        },
        {
            number: 3877,
            province: 'Провинция Чжэцзян',
            city: 'Нинбо Сити',
            type: 'Мебель',
            sub_type: 'стол',
        },
        {
            number: 4342,
            province: 'Провинция Чжэцзян',
            city: 'Чжоушань город',
            type: 'Мебель',
            sub_type: 'стол',
        },
        {
            number: 5343,
            province: 'Провинция Чжэцзян',
            city: 'Ханчжоу город',
            type: 'Мебель',
            sub_type: 'диван',
        },
        {
            number: 632,
            province: 'Провинция Чжэцзян',
            city: 'Шаосин город',
            type: 'Мебель',
            sub_type: 'диван',
        },
        {
            number: 7234,
            province: 'Провинция Чжэцзян',
            city: 'Нинбо Сити',
            type: 'Мебель',
            sub_type: 'диван',
        },
        {
            number: 834,
            province: 'Провинция Чжэцзян',
            city: 'Чжоушань город',
            type: 'Мебель',
            sub_type: 'диван',
        },
        {
            number: 945,
            province: 'Провинция Чжэцзян',
            city: 'Ханчжоу город',
            type: 'Офисные принадлежности',
            sub_type: 'Ручка',
        },
        {
            number: 1304,
            province: 'Провинция Чжэцзян',
            city: 'Шаосин город',
            type: 'Офисные принадлежности',
            sub_type: 'Ручка',
        },
        {
            number: 1145,
            province: 'Провинция Чжэцзян',
            city: 'Нинбо Сити',
            type: 'Офисные принадлежности',
            sub_type: 'Ручка',
        },
        {
            number: 1432,
            province: 'Провинция Чжэцзян',
            city: 'Чжоушань город',
            type: 'Офисные принадлежности',
            sub_type: 'Ручка',
        },
        {
            number: 1343,
            province: 'Провинция Чжэцзян',
            city: 'Ханчжоу город',
            type: 'Офисные принадлежности',
            sub_type: 'бумага',
        },
        {
            number: 1354,
            province: 'Провинция Чжэцзян',
            city: 'Шаосин город',
            type: 'Офисные принадлежности',
            sub_type: 'бумага',
        },
        {
            number: 1523,
            province: 'Провинция Чжэцзян',
            city: 'Нинбо Сити',
            type: 'Офисные принадлежности',
            sub_type: 'бумага',
        },
        {
            number: 1634,
            province: 'Провинция Чжэцзян',
            city: 'Чжоушань город',
            type: 'Офисные принадлежности',
            sub_type: 'бумага',
        },
        {
            number: 1723,
            province: 'Провинция Сычуань',
            city: 'Чэнду город',
            type: 'Мебель',
            sub_type: 'стол',
        },
        {
            number: 1822,
            province: 'Провинция Сычуань',
            city: 'Мяньян город',
            type: 'Мебель',
            sub_type: 'стол',
        },
        {
            number: 1943,
            province: 'Провинция Сычуань',
            city: 'Наньчун Сити',
            type: 'Мебель',
            sub_type: 'стол',
        },
        {
            number: 2330,
            province: 'Провинция Сычуань',
            city: 'Лэшань',
            type: 'Мебель',
            sub_type: 'стол',
        },
        {
            number: 2451,
            province: 'Провинция Сычуань',
            city: 'Чэнду город',
            type: 'Мебель',
            sub_type: 'диван',
        },
        {
            number: 2244,
            province: 'Провинция Сычуань',
            city: 'Мяньян город',
            type: 'Мебель',
            sub_type: 'диван',
        },
        {
            number: 2333,
            province: 'Провинция Сычуань',
            city: 'Наньчун Сити',
            type: 'Мебель',
            sub_type: 'диван',
        },
        {
            number: 2445,
            province: 'Провинция Сычуань',
            city: 'Лэшань',
            type: 'Мебель',
            sub_type: 'диван',
        },
        {
            number: 2335,
            province: 'Провинция Сычуань',
            city: 'Чэнду город',
            type: 'Офисные принадлежности',
            sub_type: 'Ручка',
        },
        {
            number: 245,
            province: 'Провинция Сычуань',
            city: 'Мяньян город',
            type: 'Офисные принадлежности',
            sub_type: 'Ручка',
        },
        {
            number: 2457,
            province: 'Провинция Сычуань',
            city: 'Наньчун Сити',
            type: 'Офисные принадлежности',
            sub_type: 'Ручка',
        },
        {
            number: 2458,
            province: 'Провинция Сычуань',
            city: 'Лэшань',
            type: 'Офисные принадлежности',
            sub_type: 'Ручка',
        },
        {
            number: 4004,
            province: 'Провинция Сычуань',
            city: 'Чэнду город',
            type: 'Офисные принадлежности',
            sub_type: 'бумага',
        },
        {
            number: 3077,
            province: 'Провинция Сычуань',
            city: 'Мяньян город',
            type: 'Офисные принадлежности',
            sub_type: 'бумага',
        },
        {
            number: 3551,
            province: 'Провинция Сычуань',
            city: 'Наньчун Сити',
            type: 'Офисные принадлежности',
            sub_type: 'бумага',
        },
        {
            number: 352,
            province: 'Провинция Сычуань',
            city: 'Лэшань',
            type: 'Офисные принадлежности',
            sub_type: 'бумага',
        },
    ];

    const [data, setData] = useState(initialData);

    const s2DataCfg = {
        describe: 'Описание',
        fields: {
            rows: ['province', 'city'],
            columns: ['type', 'sub_type'],
            values: ['number'],
            valueInCols: true,
        },
        meta: [
            {
                field: 'number',
                name: 'Количество',
            },
            {
                field: 'province',
                name: 'Провинция',
            },
            {
                field: 'city',
                name: 'Город',
            },
            {
                field: 'type',
                name: 'Тип',
            },
            {
                field: 'sub_type',
                name: 'Подтип',
            },
        ],
        data: data,
    };

    const s2Options = {
        width: 1200,
        height: 400,
        hierarchyType: 'tree',
        interaction: {
            enableCopy: true,
        },
    };

    const [editingCell, setEditingCell] = useState(null);
    const [editingValue, setEditingValue] = useState('');

    const handleDataCellDoubleClick = (event) => {
        const cellMeta = event.target.meta;
        if (cellMeta && cellMeta.fieldValue) {
            setEditingCell({
                width: cellMeta.width,
                height: cellMeta.height,
                x: event.target.backgroundShape.cfg.canvasBBox.x,
                y: event.target.backgroundShape.cfg.canvasBBox.y,
                city: cellMeta.data.city,
                province: cellMeta.data.province,
                type: cellMeta.data.type,
                sub_type: cellMeta.data.sub_type,
            });
            setEditingValue(cellMeta.fieldValue);
        }
        console.log(event);
    };

    const handleInputChange = (e) => {
        setEditingValue(e.target.value);
    };

    const handleInputBlur = () => {
        if (editingCell) {
            const updatedData = data.map((item) =>
                item.province === editingCell.province &&
                item.city === editingCell.city &&
                item.type === editingCell.type &&
                item.sub_type === editingCell.sub_type
                    ? { ...item, number: parseFloat(editingValue) }
                    : item
            );
            setData(updatedData);
            setEditingCell(null);
            setEditingValue('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.target.blur();
        }
    };

    useEffect(() => {
        console.log(editingCell);
        console.log(editingValue);
    }, [editingCell, editingValue]);

    return (
        <div className={styles.reviewViewContainer}>
            <SheetComponent
                dataCfg={s2DataCfg}
                options={s2Options}
                sheetType="pivot"
                adaptive={false}
                onDataCellDoubleClick={handleDataCellDoubleClick}
            />
            {editingCell && (
                <textarea
                    value={editingValue}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    onKeyDown={handleKeyDown}
                    autoFocus={true}
                    style={{
                        position: 'absolute',
                        top: `${editingCell.y}px`,
                        left: `${editingCell.x}px`,
                        width: `${editingCell.width}px`,
                        height: `${editingCell.height}px`,
                        minHeight: `${editingCell.height}px`,
                    }}
                />
            )}
        </div>
    );
};

export default ReviewView;
