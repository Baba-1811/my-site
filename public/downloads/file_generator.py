import os

def generate_files(prefix, start, end, ext, output_dir="."):
    os.makedirs(output_dir, exist_ok=True)
    for i in range(start, end + 1):
        filename = f"{prefix}_{i:03d}.{ext}"
        filepath = os.path.join(output_dir, filename)
        with open(filepath, "w") as f:
            f.write(f"# {filename}\n")
    print(f"{end - start + 1}個のファイルを生成しました")

generate_files("data", 1, 10, "txt", "output")