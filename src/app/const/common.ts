export const MODE_FORM = {
    create: 'CREATE',
    update: 'UPDATE',
    detail: 'DETAIL',
}

export const MSG = {
    validate_required: 'Trường này không được phép để trống!'
}

export function formatCurrency(value: string): string {
    if (typeof value == 'number') {
        value = value + ''
    }

    if (typeof value !== 'string') {
        return value; // Trả về giá trị ban đầu nếu không phải là chuỗi
    }

    const chars = value.split('');

    // Tiếp tục xử lý như bình thường
    for (let i = chars.length - 3; i > 0; i -= 3) {
        chars.splice(i, 0, '.');
    }

    return chars.join('');
}