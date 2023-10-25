var maxArea = function(height) {
    let maxAr = 0;
    let left = 0;
    let right = height.length - 1;

    for (let width = height.length - 1; width > 0; width--) {
        const containerHeight = Math.min(height[left], height[right]);
        const area = width * containerHeight;
        maxAr = Math.max(maxAr, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxAr;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
